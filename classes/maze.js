const Node = require('./node');

module.exports = class Maze {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.nodes = {};
    this.initializeNodes();
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
