class Graph {
  constructor() {
    this.adjencencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencencyList[vertex]) {
      this.adjencencyList[vertex] = [];
      return true;
    }
    return false;
  }

  //   connection
  addEdge(vtx1, vtx2) {
    if (this.adjencencyList[vtx1] && this.adjencencyList[vtx2]) {
      this.adjencencyList[vtx1].push(vtx2);
      this.adjencencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjencencyList[vtx1] && this.adjencencyList[vtx2]) {
      this.adjencencyList[vtx1] = this.adjencencyList[vtx1].filter(
        (v) => v !== vtx2
      );
      this.adjencencyList[vtx2] = this.adjencencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (!this.adjencencyList[vtx]) return false;
    for (let neighbour of this.adjencencyList[vtx]) {
      this.removeEdge(neighbour, vtx);
    }
    delete this.adjencencyList[vtx];
    return this;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
console.log(myGraph);
// myGraph.removeEdge("B", "C");
myGraph.removeVertex("B");
console.log(myGraph);
