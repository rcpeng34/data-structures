var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // Set the toNode
  if (Object.keys(this.nodes).length === 1) {
    toNode = Object.keys(this.nodes)[0];
  }

  // If toNode is empty and there is more than 0 nodes, then break
  if (toNode === undefined && Object.keys(this.nodes).length >0) {
    return;
  }

  // Create the node
  this.nodes[newNode]={};

  //Add an edge
  if (toNode !== undefined) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  for (var edges in this.nodes[node]) {
    delete this.nodes[edges][node];
    this.deleteFloats(edges);
  }
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  this.deleteFloats(fromNode);
  this.deleteFloats(toNode);
};

Graph.prototype.deleteFloats = function(node) {
  if (Object.keys(this.nodes[node]).length === 0) {
    delete this.nodes[node];
  }
}
