"use strict";

class Graph {
    constructor(){
        this._nodes = [];
    }
    addNode(x){
        this._nodes = this._nodes.concat(x)
        
    }

    nodeIdList(){
        let nodeIds = []
        for(var i in this._nodes){
            nodeIds = nodeIds.concat(this._nodes[i].getId())
        } 
        return nodeIds
    }

}

class Node {
    constructor(id) {
      this._id = id;
      this._adjacent = [];
    }
    
    getId(){
        return this._id
    }
    addAdjacent(id, weight){
    this._adjacent = this._adjacent.concat({id: weight})    
    }
}

