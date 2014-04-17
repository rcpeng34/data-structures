var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    // check if list is empty
    // if empty set newNode as head and tail
    // else add to end of linkedlist
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target, node){
    node = node || list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    };
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
