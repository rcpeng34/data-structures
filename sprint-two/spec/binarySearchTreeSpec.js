var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstLog(func);
    assert.notStrictEqual(array, [5,2,1,3]);
    expect(JSON.stringify(array)).to.equal(JSON.stringify([5,2,1,3]));
  });

  it("should execute a callback on every value in a tree using 'breadthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.breadthFirstLog(func);
    assert.notStrictEqual(array, [5,2,6,1,3,4]);
    expect(JSON.stringify(array)).to.equal(JSON.stringify([5,2,6,1,3,4]));
  });

  it("should know its own depth", function() {
    binarySearchTree.insert(12);
    binarySearchTree.insert(3);
    binarySearchTree.insert(11);
    binarySearchTree.insert(14);
    binarySearchTree.insert(16);
    binarySearchTree.insert(9);
    binarySearchTree.insert(13);
    binarySearchTree.insert(20);
    expect(binarySearchTree.right.right.depth).to.equal(2);

  });

});
