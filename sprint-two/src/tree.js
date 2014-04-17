// helper function to extend methods
var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  //delete this
  newTree.count = 0;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	// use makeTree to ensure all child nodes are also trees
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
	// check if current node matches
	// if it does, you're done
	if (this.value === target) {
		return true;
	};
	// check all child nodes by branch
	var result = false;
	// check each child node with contains recursively
	for (var i = 0; i < this.children.length; i++) {
		// in this loop result is always false
		// if result ever becomes true from below, the loop is broken
		result = this.children[i].contains(target);
		if (result) {
			break;
		}
	};
	return result;
};

