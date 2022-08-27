/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Quit extends Command {
    execute(params : string[]) : boolean {

        if (params.length > 0) {
            this.game.out.println("Quit what?");
            return false;
        }

        else {
            return true;
        }
    }
}
