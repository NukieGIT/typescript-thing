import { Ripple } from "./Ripple";

export class RippleHandler {
    private _ripples: HTMLElement[];
    public get ripples(): HTMLElement[] {
        return this._ripples;
    }
    private set ripples(v: HTMLElement[]) {
        this._ripples = v;
    }

    private _lastRipple : Ripple = <Ripple>{};

    constructor() {
        this._ripples = [];
        const ripples = document.querySelectorAll<HTMLElement>('.ripple');
        ripples.forEach((element) => {
            this._ripples.push(element);
        });
        this.eventListeners();
    }

    private eventListeners() {
        this._ripples.forEach((element) => {
            element.addEventListener('mousedown', (e) => {
                const x: number = e.pageX - element.offsetLeft;
                const y: number = e.pageY - element.offsetTop;

                const elemLongestSide: number =
                    element.offsetWidth > element.offsetHeight
                        ? element.offsetWidth * 2
                        : element.offsetHeight * 2;

                const finalx: number = x - elemLongestSide / 2;
                const finaly: number = y - elemLongestSide / 2;

                const ripple : Ripple = new Ripple("#e3d2ff", finalx, finaly, elemLongestSide, 0.5);
                this._lastRipple = ripple;
                ripple.Spawn(element);

            });
            element.addEventListener("mouseup", () => {
                if (!this._lastRipple.canDisappear) {
                    this._lastRipple.runAfterAnim();
                    return
                }
                this._lastRipple.Disappear();
            })
        });
    }
}
