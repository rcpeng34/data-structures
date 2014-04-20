// use below for functional shared style implementation
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

bstMethods.insert = function(value, parent) {
  // if the current node.value matches value, don't do anything
  if (this.value === value) {
    return;
  }
  // use parent for recursive rebalancing functions
  parent = parent || this;
  // set a new depth to apply to the next BST that is inserted, if it is inserted
  var depth = this.depth + 1;
  if (value > this.value) {
    if (!this.right) {
      // if this.right is empty, and value is > this.value, then you insert
      this.right = makeBinarySearchTree(value, depth); //insert
    } else {
      // since right alreayd exists, search further down to find insertion location
      this.right.insert(value, parent);
    }
  } else {
    // since value is not >= this.value, assume < value
    if (!this.left) {
      // repeat steps similar to above
      this.left = makeBinarySearchTree(value, depth); //insert
    } else {
      this.left.insert(value, parent);
    }
  }
};

bstMethods.contains = function(target) {
  // set default to false
  var result = false;

  // recurse through the entire bst and return true if the value is found
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

  // after recursion, if the value is not found, the default value will be returned as result
  return result;
};

bstMethods.depthFirstLog = function(func) {
  // traverses the tree by depth, going into the end of each node vertically first
  func(this.value);
  if(this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(func);
  }
};
bstMethods.breadthFirstLog = function(func) {
  // create a queue to hold order in which nodes are called
  var queue = [];
  // first push the calling node to queue
  queue.push(this);
  // invoke helper
  this.breadthHelper(func, queue);
};

bstMethods.breadthHelper = function (func, queue) {
  // helper first takes first value out of queue and calls the callback on it
  var removedNode = queue.shift();
  func(removedNode.value);
  // now each child of the removed node is added to the back of the queue
  // these now are called after existing nodes in queue, eg those with less depth
  if (removedNode.left) {
    queue.push(removedNode.left);
  }
  if (removedNode.right) {
    queue.push(removedNode.right);
  }
  // if queue is non empty, continue calling the helper until all nodes are hit
  if (queue.length) {
    queue[0].breadthHelper(func, queue);
  }
};

//psuedo code for rebalancing the tree
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

