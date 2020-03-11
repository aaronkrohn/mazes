import { randNumberTo } from "./util"

export default class BinaryTree {
    on(grid) {
        grid.eachCell(cell => {
            const neighbors = []

            if (cell.south) {
                neighbors.push("south")
            }

            if (cell.east) {
                neighbors.push("east")
            }

            const index = randNumberTo(neighbors.length)
            const neighbor = neighbors[index]

            if (neighbor) {
                cell.link(neighbor)
            }
        })

        return grid
    }
}
