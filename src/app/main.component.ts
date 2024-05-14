import html from "./main.component.html";
import css from "./main.component.css";
import { Click, EzComponent } from "@gsilber/webez";
import { GiftBoxComponent } from "./gift-box/gift-box.component";
import { BowdyPicComponent } from "./bowdy-pic/bowdy-pic.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private gift: GiftBoxComponent = new GiftBoxComponent();
    private bowdy: BowdyPicComponent = new BowdyPicComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.gift, "gift");
        this.addComponent(this.bowdy, "bowdy");
    }
    @Click("gift")
    turnDogOn() {
        this.bowdy.showBowdy();
    }
}
