# W09D01 Data Structures & Algorithms

### To Do
- [x] Implement a maze generating algorithm

## Algorithm

* A set of instructions

## Data Structures

* A way of orginizing data (related)
* Array
* Objects
* Tree - parent nodes, child nodes
* Graph - nodes are related to other nodes
* Stack - LIFO Last In First Out
* Queue - FIFO First In First Out

## Classes

- Maze
- Node

## Recursive Backtracking Algorithm

1. Create a stack
2. Choose a random starting node
3. Push starting node onto the stack

While the stack is not empty
4. Peek the top off the stack
5. Find the neighbours of that node

If there are neighbours that haven't been visited
6. Choose a random neighbour that hasn't been visited
7. Both nodes make reference to each other
8. Push new node onto the stack

If there are no neighbours to visit
9. Pop the node off the stack

### Useful Links

* [Algorithms](https://en.wikipedia.org/wiki/Algorithm)
* [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
