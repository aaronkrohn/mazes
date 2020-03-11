import { randNumberTo } from "./util"

export default class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns

        this.grid = this.prepareGrid()
        this.configureCells()
    }

    toString() {
        const buildNorthWall = () => {
            let test = ""

            for (let i = 0; i < this.columns; i++) {
                test += "+---"
            }

            return test
        }

        let output = buildNorthWall() + "+" + "\n"

        this.eachRow(row => {
            output += ""
            let top = "|"
            let bottom = "+"

            row.map(cell => {
                let newCell

                if (!cell) {
                    newCell = new Cell(-1, -1)
                } else {
                    newCell = cell
                }
                let body = "   "
                let eastBoundary = newCell.linked("east") ? " " : "|"
                let southBoundary = newCell.linked("south") ? "   " : "---"

                top += body + eastBoundary

                let corner = "+"
                bottom += southBoundary + corner
            })

            output += top + "\n"
            output += bottom + "\n"
        })

        return output
    }

    prepareGrid() {
        return [...new Array(this.rows)].map((_, rowIndex) => {
            return [...new Array(this.columns)].map(
                (_, columnIndex) => new Cell(rowIndex, columnIndex),
            )
        })
    }

    eachRow(callback) {
        this.grid.forEach(row => {
            callback(row)
        })
    }

    eachCell(callback) {
        this.eachRow(row => {
            row.forEach(cell => {
                callback(cell)
            })
        })
    }

    configureCells() {
        this.eachCell((cell, index) => {
            cell.north = this.isOutOfBounds(cell.row - 1, cell.column)
            cell.south = this.isOutOfBounds(cell.row + 1, cell.column)
            cell.west = this.isOutOfBounds(cell.row, cell.column - 1)
            cell.east = this.isOutOfBounds(cell.row, cell.column + 1)
        })
    }

    isOutOfBounds(cellRow, cellColumn) {
        if (!this.grid[cellRow]) {
            return null
        }

        if (cellRow >= 0 && cellRow <= this.rows - 1) {
            return this.grid[cellRow][cellColumn]
        }

        if (cellColumn >= 0 && this.grid[cellRow].length - 1) {
            return this.grid[cellRow][cellColumn]
        }

        return null
    }

    randCell() {
        const ranRow = randNumberTo(this.rows)
        const ranColumn = randNumberTo(this.grid[ranRow].length)

        return this.grid[ranRow][ranColumn]
    }

    size() {
        return this.rows * this.columns
    }
}

