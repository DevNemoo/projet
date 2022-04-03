import { Coordinates } from "./coordinates.js";
import { Generic_item, DIRT, ROCK, WALL, DIAMOND, unbreakable, ROCKFORD } from "./generic_item.js";
import { MOVEUP, MOVEDOWN, MOVELEFT, MOVERIGHT, NOMOVE} from "./map.js";

export class Rockford extends Generic_item {

    /**
     * Constructor
     * @param {Map} map : map on which is placed the item
     * @param {Coordinates} coordinates : coordinates of the item on the map
     */
    constructor(map, coordinates)
    {
        super(ROCKFORD, map, coordinates);
    }

    /**
     * Updates the item if one of its neighbors moved
     */
    update() {
        const order = this.map.nextMove;

        switch (order) {
            case MOVEUP:
                this.#moveUp();
                break;
            case MOVEDOWN:
                this.#moveDown();
                break;
            case MOVELEFT:
                this.#moveLeft();
                break;
            case MOVERIGHT:
                this.#moveRight();
                break;
        }

    }

    /**
     * Moves Rockford upward, if possible
     */
    #moveUp() {
        const coordUp = this.coordinates.up();

        if (!this.map.isOnMap(coordUp)) return;

        let upNeighbor = this.map.getItemType(coordUp);

        if (!(upNeighbor == null) && (unbreakable.includes(upNeighbor.type))) return;

        if (!(upNeighbor == null) && (upNeighbor.type == DIAMOND)) {
            this.map.collectDiamond();
        }

        this.map.moveItem(this.coordinates, coordUp);
        this.map.addNeighborsToUpdate(this.coordinates);
        this.map.addMovement();
    }

    /**
     * Moves Rockford downward, if possible
     */
    #moveDown() {
        const coordDown = this.coordinates.down();

        if (!this.map.isOnMap(coordDown)) return;

        let downNeighbor = this.map.getItemType(coordDown);

        if (!(downNeighbor == null) && (unbreakable.includes(downNeighbor.type))) return;

        if (!(downNeighbor == null) && (downNeighbor.type == DIAMOND)) {
            this.map.collectDiamond();
        }

        this.map.moveItem(this.coordinates, coordDown);
        this.map.addNeighborsToUpdate(this.coordinates);
        this.map.addMovement();
    }

    /**
     * Moves Rockford rightward, if possible
     */
    #moveRight() {
        const coordRight = this.coordinates.right();

        if (!this.map.isOnMap(coordRight)) return;

        let rightNeighbor = this.map.getItemType(coordRight);

        if (!(rightNeighbor == null) && (rightNeighbor.type) == WALL) return;

        if (!(rightNeighbor == null) && (rightNeighbor.type) == ROCK) {
            if (this.map.getItemType(coordRight.right() == null)) {
                this.map.moveItem(coordRight, coordRight.right());
                this.map.moveItem(this.coordinates, coordRight);
                this.map.addMovement();
            }
            return
        }

        if (!(rightNeighbor == null) && (rightNeighbor.type == DIAMOND)) {
            this.map.collectDiamond();
        }

        this.map.moveItem(this.coordinates, coordRight);
        this.map.addNeighborsToUpdate(this.coordinates);
        this.map.addMovement();
    }

    /** 
     * Moves Rockford leftward, if possible
     * */
    #moveLeft() {
        const coordLeft = this.coordinates.left();

        if (!this.map.isOnMap(coordLeft)) return;

        let leftNeighbor = this.map.getItemType(coordLeft);

        if (!(leftNeighbor == null) && (leftNeighbor.type) == WALL) return;

        if (!(leftNeighbor == null) && (leftNeighbor.type) == ROCK) {
            if (this.map.getItemType(coordLeft.left() == null)) {
                this.map.moveItem(coordLeft, coordLeft.left());
                this.map.moveItem(this.coordinates, coordLeft);
                this.map.addMovement();
            }
            return
        }

        if (!(leftNeighbor == null) && (leftNeighbor.type == DIAMOND)) {
            this.map.collectDiamond();
        }

        this.map.moveItem(this.coordinates, coordLeft);
        this.map.addNeighborsToUpdate(this.coordinates);
        this.map.addMovement();
    }

}