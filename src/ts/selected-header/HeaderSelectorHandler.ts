import { HeaderSelector } from "./HeaderSelector";

export class HeaderSelectorHandler {

    private _items : HTMLElement[] = [];
    public get items() : HTMLElement[] {
        return this._items;
    }
    public set items(v : HTMLElement[]) {
        this._items = v;
    }
    
    
    constructor() {

        const parents = document.querySelectorAll<HTMLElement>(".selectable-items");

        parents.forEach(parent => {
            this.items.push(parent);
        });
        
        this.items.forEach(element => {
            const selector : HeaderSelector = new HeaderSelector(element);
        });

    }
    
}