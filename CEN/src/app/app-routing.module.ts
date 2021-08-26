import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "Home",
        loadChildren: () =>
            import("./modules/home/home.module").then((m) => m.HomeModule),
    },
    { path: "**", redirectTo: "Home" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
