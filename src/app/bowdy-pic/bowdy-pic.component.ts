import {
    BindAttribute,
    BindCSSClassToBoolean,
    EzComponent,
} from "@gsilber/webez";
import html from "./bowdy-pic.component.html";
import css from "./bowdy-pic.component.css";

export class BowdyPicComponent extends EzComponent {
    @BindAttribute("bowdy-pic", "src")
    private bowdyUrl: string = "placeholder"; //getBowdyPicture();

    @BindCSSClassToBoolean("bowdy-pic", "bowdy-pic")
    private visibleBowdy: boolean = false;

    constructor() {
        super(html, css);
    }
    showBowdy() {
        this.visibleBowdy = true;
    }
}
