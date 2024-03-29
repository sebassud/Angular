import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                `${parentModule} has already been loaded. Import Core module in the AppModule only.`
            );
        }
    }
}
