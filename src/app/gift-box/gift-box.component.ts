import { BindCSSClassToBoolean, Click, EzComponent } from "@gsilber/webez";
import html from "./gift-box.component.html";
import css from "./gift-box.component.css";

export class GiftBoxComponent extends EzComponent {
    @BindCSSClassToBoolean("gift-wrapper","shift-down")
    private shiftDown:boolean = false;

    constructor() {
        super(html, css);
    }
    @Click("gift-button")
    explodeBox () {
        this.shiftDown = true;
        
    }
}
