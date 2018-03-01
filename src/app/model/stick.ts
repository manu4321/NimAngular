export class Stick {
    private icon: string;
    private show: boolean;

    constructor(){
        //this.icon = "/assets/images/sticks.png";
        this.show = true;
    }

    getIcon(): string{
        return this.icon;
    }

    isShowing(): boolean{
        return this.show;
    }
    toggle(show: boolean){
        this.show = show;
    }

    toggleItself(){
        this.show = !this.show;
    }
}
