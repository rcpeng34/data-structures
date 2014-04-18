// need to access linkedList.js


var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  
	// i is the bucket to access
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if the bucket is empty, make a linked list
  if (!this._storage.get(i)) {
  	var newList = makeLinkedList();
  
  	var input = {key: k, value: v};
  var newNode = makeNode(input);
  newList.addToTail(newNode);

  	this._storage.set(i, newList);

  };
  // create a node to add to the linkedlist
  // var input = {key: k, value: v};
  // var newNode = makeNode(input);
  // this._storage.get(i).addToTail(newNode);

};

HashTable.prototype.retrieve = function(k){
};

HashTable.prototype.remove = function(k){
};