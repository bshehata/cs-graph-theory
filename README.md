# cs-graph-theory

This library is aimed at implementing graph principles and algorithms as they relate to computer science. 

Implemented in Node.js


Graph spec:
```
Graph{
Nodes: [Node]
Edges: [Edge]
}
```
Node Spec
Edge waitings default to 1 in unweighted graph. Names are arbitrary should default to alphabet when unspecified
```
Node : {
id: String
Adjacent: [Node]
Edges:[Edge]
}

Edge: {
weight: Int
From: Node
To: Node
}
```
