
export class Coordinates {
    // abscissa
    #x;

    // ordered
    #y;

    /**
     * Constructor
     * @param {Coordinates} coordinates : initial coordinates of the instance
     */
    constructor(coordinates) {
        this.#x = coordinates.x;
        this.#y = coordinates.y;
    }

    set x(value) { this.#x = value; }
    get x() { return this.#x; }

    set y(value) { this.#y = value; }
    get y() { return this.#y; }

    /**
     * Returns the coordinates located above the given coordinate
     * @param {Coordinates} coord
     * @returns the coordinates located above the given coordinate
     */
    up(coord) {
        const out = new coordinates({ x: coord.x(), y: coord.y() - 1})
    }

    /**
     * Returns the coordinates located below the given coordinate
     * @param {Coordinates} coord
     * @returns the coordinates located below the given coordinate
     */
    down(coord) {
        const out = new coordinates({ x: coord.x(), y: coord.y() + 1 })
    }

    /**
     * Returns the coordinates located left to the given coordinate
     * @param {Coordinates} coord
     * @returns the coordinates located left to the given coordinate
     */
    left(coord) {
        const out = new coordinates({ x: coord.x() - 1, y: coord.y() })
    }

    /**
     * Returns the coordinates located right to the given coordinate
     * @param {Coordinates} coord
     * @returns the coordinates located right to the given coordinate
     */
    right(coord) {
        const out = new coordinates({ x: coord.x() - 1, y: coord.y() })
    }
}