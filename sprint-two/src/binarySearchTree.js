var extend = function(to, from) {
  for (var prop in from) {
    to[prop] = from[prop];
  }
};

var makeBinarySearchTree = function(value, depth){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.depth = depth || 0; // depth of a BST with 1 node = 0
  extend(newTree, bstMethods);
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var depth = this.depth + 1;
  if (value > this.value) {
    if (!this.right) {
      this.right = makeBinarySearchTree(value, depth); //insert
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      this.left = makeBinarySearchTree(value, depth); //insert
    } else {
      this.left.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  var result = false;

  if (target === this.value) {
    return true;
  } else if (target > this.value) {
    if (this.right === null) {
      return false;
    }
    result = this.right.contains(target);
  } else {
    if (this.left === null) {
      return false;
    }
    result = this.left.contains(target);
  }

  return result;
};

bstMethods.depthFirstLog = function(func) {
  // test passes without implmentation
  func(this.value);
  if(this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

bstMethods.breadthFirstLog = function(func) {
  var queue = [];
  queue.push(this);
  this.breadthHelper(func, queue);
};

bstMethods.breadthHelper = function (func, queue) {
  var removedNode = queue.shift();
  func(removedNode.value);
  if (removedNode.left) {
    queue.push(removedNode.left);
  }
  if (removedNode.right) {
    queue.push(removedNode.right);
  }
  if (queue.length) {
    queue[0].breadthHelper(func, queue);
  }
};


//var calc min depth
//  track the depth
//  depthFirstLog?
//var calc max depth
//
//check if min is less than half of max
//if so, rebalance
//  traverse the tree to create an array containing all values
//  sort the array
//  make new tree with middle value
//  recurse rebuild the tree
//else do nothing
//
//Rebuild the tree
//  set root node to middle index (floor)
//  set left to 25% (floor)
//  set right to 75% (floor)
//  recurse build

