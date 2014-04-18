var extend = function(to, from) {
  for (var prop in from) {
    to[prop] = from[prop];
  }
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){

  var result = false;

  if (this.value === target) {
    return true;
  }

  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if(!result) {
        result = this.children[i].contains(target);
      } else {
        break;
      }
    }
  }

  return result;

};

