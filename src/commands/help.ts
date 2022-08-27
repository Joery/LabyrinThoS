/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Help extends Command{
    execute(params : string[]) : boolean {

        if (params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }

        this.game.out.println("You are lost. You are alone.");
        this.game.out.println("You wander around in the labyrinth.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go | quit | help | score");
        return false;
    }
}
