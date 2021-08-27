import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from "./pages/page3/page3.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
    { path: "", component: DashboardComponent, pathMatch: "full" },
    { path: "Page1", component: Page1Component },
    { path: "Page2", component: Page2Component },
    { path: "Page3", component: Page3Component },
    { path: "**", redirectTo: "" },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [],
})
export class HomeModule {}
