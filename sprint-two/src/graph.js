var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
	var tempNode = {};
	if (toNode) {
		tempNode[toNode] = true;
		this.nodes[toNode][newNode] = true;
	}
	this.nodes[newNode] = tempNode;
};

Graph.prototype.contains = function(node){
	return this.nodes[node] && true;
};

Graph.prototype.removeNode = function(node){
	for (var key in this.nodes[node])
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
