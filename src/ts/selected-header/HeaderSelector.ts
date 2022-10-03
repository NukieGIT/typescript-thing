export class HeaderSelector {

    private _selector : HTMLDivElement = <HTMLDivElement>{};
    public get selector() : HTMLDivElement {
        return this._selector;
    }
    public set selector(v : HTMLDivElement) {
        this._selector = v;
    }

    constructor(private parent : HTMLElement) {
        this.setupSelector();
    }

    private setupSelector() {
        
        this.selector = document.createElement("div");
        this.selector.classList.add("selected-header")

        this.parent.append(this.selector)

        const children = this.parent.querySelectorAll<HTMLElement>(".selectable");

        const selectables : HTMLElement[] = []

        children.forEach(selectable => {
            selectables.push(selectable);
        })

        selectables.forEach(elem => {
            elem.addEventListener("mouseup", () => {
                this.selector.style.left = elem.offsetLeft+"px"
                this.selector.style.width = elem.offsetWidth+"px"
                this.selector.style.top = elem.offsetTop + elem.offsetHeight - (this.selector.offsetHeight / 2) + "px";
            });
        })

    }

}