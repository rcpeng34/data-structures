var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(k))) {
  	this._storage.set(k, []);
  }
  this._storage.get(k).push(v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.set(i, null);
};