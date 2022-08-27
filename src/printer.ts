/**
 * @author  Joery Zegers
 * @version 2017.05.22
 */

class Printer {
    output : HTMLElement;

    constructor(output : HTMLElement) {
        this.output = output;
    }

    print(text : string) : void {
         this.output.innerHTML += text;
    }

    println(text="") : void {
         this.print(text + "<br/>");
         this.output.scrollTop = this.output.scrollHeight;
    }
}
