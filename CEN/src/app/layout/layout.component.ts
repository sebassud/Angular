import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../core/services/authentication.service";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
    constructor(private aouthenticationService: AuthenticationService) {}

    ngOnInit() {}
    get isLogged(): boolean {
        return this.aouthenticationService.isLogged;
    }
}
