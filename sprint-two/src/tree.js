var extend = function(to, from) {
  for (var prop in from) {
    to[prop] = from[prop];
  }
};

var makeTree = function(value, parentNode){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parentNode;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.removeFromParent = function() {
  if (this.parent !== undefined) {
    for (var i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i].value === this.value) {
        this.parent.children.splice(i,1);
        break;
      }
    }
    this.parent = null;
  }
};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value, this));
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
