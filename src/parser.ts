/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Parser {
    input : HTMLInputElement;
    private game : Game;
    commands: { [key : string] : Command }={};
    default: Default;

    constructor(game: Game, input : HTMLInputElement) {
        this.game = game;
        this.input = input;
        this.default = new Default(game);
        this.commands["go"] = new Go(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["score"] = new Score(game);

        input.onkeyup = (e) => {
            if (e.keyCode == 13 && this.game.isOn) {
                let commands = this.input.value;
                this.game.out.println(commands);
                this.parse(commands.split(" "));
                this.input.value = "";
                this.game.out.print(">");
            }
        }
    }

    parse(words : string[]) : void {
        let wantToQuit = false;
        let params = words.slice(1);

        if (words[0] == "") {
            return;
        }

        let command : Command;
        command = this.commands[words[0]];

        if (command == null) {
            command = this.default;
        }

        wantToQuit = command.execute(params);

        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    }
}
