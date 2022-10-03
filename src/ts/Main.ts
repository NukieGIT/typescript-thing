import { RippleHandler } from './ripple/RippleHandler';
import { HeaderSelectorHandler } from './selected-header/HeaderSelectorHandler';

export class Main {
    public static main() {
        new RippleHandler();
        new HeaderSelectorHandler();
    }
}
