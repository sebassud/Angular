import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
    {
        path: "Home",
        loadChildren: () =>
            import("./modules/home/home.module").then((m) => m.HomeModule),
        canLoad: [AuthGuard],
    },
    {
        path: "Account",
        loadChildren: () =>
            import("./modules/account/account.module").then(
                (m) => m.AccountModule
            ),
    },
    { path: "**", redirectTo: "Home" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
