var HashTable = function(){
  this._count = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //get the array at the index
  var bucket = this._storage.get(i);

  //traverse the array if nonempty to find the key
  if (bucket) {
    for(var j = 0; j < bucket.length; j++) {
      // if the key in the tuple matches, return the value
      if(bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  }
  // oh no! we never found anything so return empty
  return null;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //check if there is an array at the index, if not create one
  if(!Array.isArray(this._storage.get(i))) {
    this._storage.set(i, []);
  }
  // by default set overwritten to false, then check if this key exists
  // if it does, overwritten will be set to true later
  var overwritten = false;

  for (var j = 0; j < this._storage.get(i).length; j++) {
    var tuple = this._storage.get(i)[j];
    // if the key matches, flip overwritten to true and set the value to the new value
    if(tuple[0] === k) {
      overwritten = true;
      tuple[1] = v;
    }
  }
  // if we found a matching key, don't push the new value otherwise add a tuple
  if (!overwritten) {
    this._storage.get(i).push([k, v]);
    this._count++;
  }
  // check if we need to resize
  if (this._count / this._limit >= 0.75) {
    this.reSize(this._limit * 2);
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
    // check to see if the value is in the bucket
      if (bucket[j][0] === k) {
        // if it is, splice the tuple out of the bucket
        bucket.splice(j, 1);
        this._count--;
        break;
      }
    }
  }
  // check if we need to resize
  if (this._count / this._limit < 0.25) {
    this.reSize(this._limit * 0.50);
  }
};

HashTable.prototype.reSize = function (newLimit) {
  // set the limit to the new size
  this._limit = newLimit;
  // store the old set of values somewhere
  var oldStorage = this._storage;
  // create a new empty storage
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
  var hash = this;
  // take each item stored in oldStorage and rehash
  oldStorage.each(function(bucket){
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        hash.insert(bucket[j][0], bucket[j][1]);
      }
    }
  });
};
