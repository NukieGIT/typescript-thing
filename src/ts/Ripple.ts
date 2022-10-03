export class Ripple {
    private _canDisappear: boolean = false;

    public get canDisappear(): boolean {
        return this._canDisappear;
    }

    private _ripple: HTMLSpanElement = <HTMLSpanElement>{};

    constructor(
        private _color: string,
        private _x: number,
        private _y: number,
        private _size: number,
        private _speed: number,
    ) {}

    /**
     * Spawn
     */
    public Spawn(element: HTMLElement): void {
        const spanRipple: HTMLSpanElement = document.createElement('span');
        spanRipple.style.position = 'absolute';
        spanRipple.style.zIndex = '-1';
        spanRipple.style.pointerEvents = 'none';
        spanRipple.style.borderRadius = '50%';
        spanRipple.style.backgroundColor = this._color;

        spanRipple.style.left = `${this._x.toString()}px`;
        spanRipple.style.top = `${this._y.toString()}px`;
        spanRipple.style.width = `${this._size.toString()}px`;
        spanRipple.style.height = `${this._size.toString()}px`;
        spanRipple.style.animation = `${this._speed}s forwards ease-in scaleUp`;

        this._ripple = spanRipple;
        element.append(spanRipple);

        const endEvent = () => {
            this._canDisappear = true;
            spanRipple.removeEventListener('animationend', endEvent);
        };

        spanRipple.addEventListener('animationend', endEvent);
    }

    /**
     * runAfterAnim
     */
    public runAfterAnim() {
        const endEvent = () => {
            this.Disappear();
            this._ripple.removeEventListener("animationend", endEvent);
        }

        this._ripple.addEventListener('animationend', endEvent)
    }

    /**
     * Disappear
     */
    public Disappear() {
        this._ripple.style.animation = `${this._speed}s forwards ease-in-out fadeOut`;

        this._ripple.addEventListener("animationend", () => {
            this._ripple.remove();
        })
    }
}
