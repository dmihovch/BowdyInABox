import {
    BindAttribute,
    BindCSSClassToBoolean,
    EzComponent,
} from "@gsilber/webez";
import html from "./bowdy-pic.component.html";
import css from "./bowdy-pic.component.css";
import { getBowdyPicture } from "./getPicUrls";

export class BowdyPicComponent extends EzComponent {
    @BindAttribute("bowdy-pic", "src")
    private bowdyUrl: string = getBowdyPicture();

    @BindCSSClassToBoolean("bowdy-pic", "bowdy-visible")
    private invisibleBowdy: boolean = true;

    constructor() {
        super(html, css);
    }
    showBowdy() {
        this.invisibleBowdy = false;
    }
}
