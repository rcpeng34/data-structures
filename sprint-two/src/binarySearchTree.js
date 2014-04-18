// spec expects you to extend tree in the binary tree

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var makeBinarySearchTree = function(value){
	var newTree = {
		value: value,
		left: null,
		right: null
	};
	extend(newTree, bstMethods);
	return newTree;
};

var bstMethods = {};

bstMethods.insert = function (value) {
} 