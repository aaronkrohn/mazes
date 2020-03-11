import BinaryTree from "./binaryTree"
import Grid from "./grid"

const grid = new Grid(10,10)
const tree = new BinaryTree()

tree.on(grid);
console.log(grid.toString());
