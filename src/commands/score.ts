/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Score extends Command{
    execute(params : string[]) : boolean {

        if (params.length > 0) {
            this.game.out.println("What score?");
            return false;
        }

        this.game.out.println("Taken steps: " + this.game.score);
        return false;
    }
}
