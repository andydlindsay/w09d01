const Node = require('./node');
const Stack = require('./stack');
const { renderMaze } = require('../helpers/helpers');

module.exports = class Maze {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.nodes = {};
    this.generateMaze();
  }

  generateMaze() {
    this.initializeNodes();
    const stack = new Stack();
    stack.push(this.randomNode());

    while (stack.length) {
      const currentNode = stack.peek();
      currentNode.visited = true;
      currentNode.active = true;
      let neighbours = this.findNeighbours(currentNode);
      neighbours = neighbours.filter((neighbour) => {
        return !neighbour[0].visited;
      });

      if (neighbours.length) {
        const [ nextNode, direction ] = neighbours[Math.floor(Math.random() * neighbours.length)];
        currentNode[direction] = nextNode;
        const reverse = {
          'above': 'below',
          'right': 'left',
          'below': 'above',
          'left': 'right'
        };
        nextNode[reverse[direction]] = currentNode;
        stack.push(nextNode);
      } else {
        stack.pop();
      }

      console.log(stack.length);
      renderMaze(this);
      currentNode.active = false;
    }
  }

  findNeighbours(node) {
    const { x, y } = node;
    const neighbours = [];
    
    // above
    if (y - 1 >= 0) {
      neighbours.push([this.findNode(x, y - 1), 'above']);
    }

    // right
    if (x + 1 < this.width) {
      neighbours.push([this.findNode(x + 1, y), 'right']);
    }

    // below
    if (y + 1 < this.length) {
      neighbours.push([this.findNode(x, y + 1), 'below']);
    }

    // left
    if (x - 1 >= 0) {
      neighbours.push([this.findNode(x - 1, y), 'left']);
    }

    return neighbours;
  }

  initializeNodes() {
    for (let y = 0; y < this.length; y++) {
      for (let x = 0; x < this.width; x++) {
        this.nodes[`${x},${y}`] = new Node(x, y);
      }
    }
  }

  findNode(x, y) {
    return this.nodes[`${x},${y}`];
  }

  randomNode() {
    const randomX = Math.floor(Math.random() * this.width);
    const randomY = Math.floor(Math.random() * this.length);
    return this.findNode(randomX, randomY);
  }
};
