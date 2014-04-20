var Graph = function(){
  // nodes uses the value of nodes as keys
  // the keys link to an object where nodes connected by edges are keys
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // if there is only 1 node in the graph, automatically connect new node to the original
  if (Object.keys(this.nodes).length === 1) {
    toNode = Object.keys(this.nodes)[0];
  }

  // if toNode is empty and there is more than 1 nodes, then break
  // if there are 0 nodes, we want to create and add below but with no edges
  // if there is 1 node, it is handled above
  // the below if is called if there are 2 or more nodes and toNode = null
  // this means newNode is an unattached node and is not part of the graph
  if (toNode === undefined && Object.keys(this.nodes).length >0) {
    return;
  }

  // Create a new node
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
    // removes all edges associated to the node
    delete this.nodes[edges][node];
    // each time an edge is deleted, we check if that leaves any floating nodes
    this.deleteFloats(edges);
  }
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode][toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // to add an edge, we must add fromNode and toNode to each other's respective edge objects
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // remove the nodes from each other's edge objects
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  // check if removing the edge leaves either node as a floating node
  this.deleteFloats(fromNode);
  this.deleteFloats(toNode);
};

Graph.prototype.deleteFloats = function(node) {
  if (Object.keys(this.nodes[node]).length === 0) {
    // if there are no edges, remove the node
    delete this.nodes[node];
  }
}
