var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //check if there is an array at the index, if not create one
  if(!Array.isArray(this._storage.get(i))) {
    this._storage.set(i, [])
  }

  //now we know there is an array, get it and push to it
  this._storage.get(i).push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit)

  //get the array at the index
  var storageArray = this._storage.get(i);

  //traverse the array to find the key
  //return the value in the tuple
  for(var tuple = 0; tuple < storageArray.length; tuple++) {
    if(storageArray[tuple][0] === k) {
      return storageArray[tuple][1];
    }
  }
  // oh no! we never found anything so return empty
  return null;
};

HashTable.prototype.remove = function(k){
  //find the array
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storageArray = this._storage.get(i);
  //remove the element using splice on the array
  for (var tuple = 0; tuple < storageArray.length; tuple++) {
    if (storageArray[tuple][0] === k) {
      storageArray.splice(tuple, 1);
      break;
    }
  }
};

