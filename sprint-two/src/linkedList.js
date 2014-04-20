var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // if it's empty, set both head and tail to this
    if(this.tail === null) {
      this.head = makeNode(value);
      this.tail = this.head;
    // it's not empty, add to the linked list
    } else {
      //create a node and add it as the next value to the current tail
      this.tail.next = makeNode(value);
      //set the previous property of this new tag with the value of the previous tail
      this.tail.next.previous = this.tail;
      //move the tail tag to this new tag
      this.tail = this.tail.next;

    }
  };

  list.addToHead = function(value){
    // if the list is empty, set both
    if (this.head === null) {
      this.head = makeNode(value);
      this.tail = this.head;
    } else {
      //create a node make the current head's previous property point to the new node
      this.head.previous = makeNode(value);
      //set the new node next to the current head
      this.head.previous.next = this.head;
      //change the head pointer to point to the new node
      this.head = this.head.previous;
    }
  };

  list.removeTail = function(){
    // hold the last element
    var result = this.tail.value;
    // reset tail and have it point to nothing
    this.tail = this.tail.previous;
    this.tail.next = null;
    return result;
  };

  list.removeHead = function(){
    var result = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return result;
  };

  //searching the list using previous
  list.contains = function(target, node){
    node = node || this.tail;
    // check if the value matches the current node
    if (node.value === target) {
      return true;
    } else if (node.previous !== null) {  //check the other nodes
      return this.contains(target, node.previous);
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
  node.previous = null;

  return node;
};
