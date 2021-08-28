import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    { path: "", component: LoginComponent, pathMatch: "full" },
    { path: "Login", component: LoginComponent },
];

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    declarations: [LoginComponent],
})
export class AccountModule {}
