var HashTable = function(){
  this._count = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //get the array at the index
  var bucket = this._storage.get(i);

  //traverse the array to find the key
  //j the value in the tuple
  if (bucket) {
    for(var j = 0; j < bucket.length; j++) {
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
  var overwritten = false;

  for (var j = 0; j < this._storage.get(i).length; j++) {
    var tuple = this._storage.get(i)[j];
    if(tuple[0] === k) {
      overwritten = true;
      tuple[1] = v;
    }
  }

  //now we know there is an array, get it and push to it
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
  //remove the element using splice on the array

  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
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

  this._limit = newLimit;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
  var hash = this;
  oldStorage.each(function(bucket){
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        hash.insert(bucket[j][0], bucket[j][1]);
      }
    }
  });

};

// HashTable.prototype.size = function(){
//   // check to see how many of the indices are full
//   var count = 0;

//   this._storage.each(function(value) {
//     if(Array.isArray(value)) {count++;}
//   });
//   return (count * 100) / this._limit;
// };

// HashTable.prototype.sizeDown = function(){
//   var doubledStorage;
//   //change the size of _limit
//   this._limit = this._limit / 2;
//   //create a new storage unit with double the limit
//   doubledStorage = makeLimitedArray(this._limit);
//   //loop through the current storage and rehash it into doubledStorage
//   this._storage.each(function(value){
//     if (value) {
//       for (var j = 0; j < value.length; j++) {
//         if (value[j] !== null) {
//           var key = getIndexBelowMaxForKey(value[j][0], this._limit);
//           doubledStorage.set(key , [value[j][0], value[j][1]]);
//         }
//       }
//     }
//   });
//   //return doubledStorage
//   return doubledStorage;
// };

// HashTable.prototype.reHash = function(multiplier){
//   var doubledStorage;
//   //change the size of _limit
//   this._limit = multiplier * this._limit;
//   //create a new storage unit with double the limit
//   doubledStorage = makeLimitedArray(this._limit);
//   //loop through the current storage and rehash it into doubledStorage
//   this._storage.each(function(value){
//     if (value) {
//       for (var j = 0; j < value.length; j++) {
//         if (value[j] !== null) {
//           var key = getIndexBelowMaxForKey(value[j][0], this._limit);
//           doubledStorage.set(key , [value[j][0], value[j][1]]);
//         }
//       }
//     }
//   });
//   //return doubledStorage
//   return doubledStorage;
// };
