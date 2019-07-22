const Maze = require('./classes/maze');

const maze = new Maze(4, 4);

let randomNode = maze.randomNode();
console.log(randomNode);
randomNode = maze.randomNode();
console.log(randomNode);
