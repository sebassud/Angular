import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "../shared/shared.module";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [LayoutComponent],
    declarations: [LayoutComponent, ToolbarComponent, MenuComponent],
})
export class LayoutModule {}
