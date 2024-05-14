import { describe, expect, test, beforeAll } from "@jest/globals";
import { GiftBoxComponent } from "./gift-box.component";
import { bootstrap } from "@gsilber/webez";

describe("GiftBoxComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<GiftBoxComponent>(GiftBoxComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(GiftBoxComponent);
        });
    });
});
