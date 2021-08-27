import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "../shared/shared.module";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { DashboardMenuItemComponent } from "./components/menu/menuItems/dashboard-menu-item/dashboard-menu-item.component";
import { PageMenuItemComponent } from "./components/menu/menuItems/page-menu-item/page-menu-item.component";

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [LayoutComponent],
    declarations: [
        LayoutComponent,
        ToolbarComponent,
        MenuComponent,
        DashboardMenuItemComponent,
        PageMenuItemComponent,
    ],
})
export class LayoutModule {}
