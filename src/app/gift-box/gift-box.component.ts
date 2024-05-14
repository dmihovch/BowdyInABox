import { BindCSSClassToBoolean, Click, EzComponent } from "@gsilber/webez";
import html from "./gift-box.component.html";
import css from "./gift-box.component.css";

export class GiftBoxComponent extends EzComponent {
    @BindCSSClassToBoolean("gift-button", "explode")
    private explode: boolean = false;

    private clicks: number = 0;

    @BindCSSClassToBoolean("gift-button", "shake")
    private shake: boolean = false;

    constructor() {
        super(html, css);
    }
    @Click("gift-button")
    handleClickEvent() {
        if (this.clicks < 4) {
            this.shakeBox();
            return;
        }
        if (this.clicks >= 4) {
            this.explodeBox();
        }
    }
    shakeBox() {
        this.clicks += 1;
        this.shake = true;
        setTimeout(() => {
            this.shake = false;
        }, 500);
    }
    explodeBox() {
        this.explode = true;
    }
}
