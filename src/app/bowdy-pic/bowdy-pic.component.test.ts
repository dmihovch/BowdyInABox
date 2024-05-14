import { describe, expect, test, beforeAll } from "@jest/globals";
import { BowdyPicComponent } from "./bowdy-pic.component";
import { bootstrap } from "@gsilber/webez";

describe("BowdyPicComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<BowdyPicComponent>(BowdyPicComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(BowdyPicComponent);
        });
    });
});
