var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //check if there is an array at the index, if not create one
  if(!Array.isArray(this._storage.get(i))) {
    this._storage.set(i, []);
  }

  //now we know there is an array, get it and push to it
  this._storage.get(i).push([k, v]);
  console.log("size = " + this.size() + " | limit = " + this._limit);
  // resize the hash table if it's too full
  if(this.size() >= 75) {
    this._storage = this.sizeUp();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

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
  // resize the hash table if it's too small
  if(this.size() <= 25) {
    this._storage = this.sizeDown();
  }
};

HashTable.prototype.size = function(){
  // check to see how many of the indices are full
  var count = 0;

  this._storage.each(function(value) {
    if(Array.isArray(value)) {count++;}
  });
  console.log("count = " + count);
  return (count * 100) / this._limit;
};

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
