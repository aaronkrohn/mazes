export default class Cell {
    constructor(row, column) {
        this.row = row
        this.column = column

        this.north = null
        this.south = null
        this.east = null
        this.west = null

        // HasTable - Keep track of which neighboring cells are linked to this cell
        this.links = {
            north: false,
            south: false,
            east: false,
            west: false,
        }
    }

    link(cell, bidi = true) {
        this.links[cell] = true

        // if (bidi) {
        //   this.link(cell, false);
        // }
        //
    }

    unlink(cell, bidi = true) {
        delete this.links[cell]

        if (bidi) {
            this.unlink(cell, false)
        }
    }

    // links() {
    //   return Object.keys(this.links);
    // }

    linked(side) {
        return this.links[side]
    }

    neighbours() {
        const list = []

        if (this.north) {
            list.push("north")
        }

        if (this.south) {
            list.push("south")
        }

        if (this.east) {
            list.push("east")
        }

        if (this.west) {
            list.push("west")
        }

        this.links = list
    }
}
