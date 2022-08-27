/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Command {
    game : Game;

    constructor(game : Game) {
        this.game = game;
    }

    public execute(params : string[]) : boolean {
        return false;
    }
}
