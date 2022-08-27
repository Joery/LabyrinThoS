/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Room {
    description : string;
    northExit : Room;
    southExit : Room;
    eastExit : Room;
    westExit : Room;

    constructor(description : string) {
        this.description = description;
    }

    setExits(north : Room, east : Room, south : Room, west : Room) : void {
        if (north != null) {
            this.northExit = north;
        }
        if (east != null) {
            this.eastExit = east;
        }
        if (south != null) {
            this.southExit = south;
        }
        if (west != null) {
            this.westExit = west;
        }
    }
}
