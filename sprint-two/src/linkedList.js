var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(this.tail === null) {
      this.head = makeNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = makeNode(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target, node){
    node = node || this.head;
    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return this.contains(target, node.next);
    } else {
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
