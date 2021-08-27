import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
    showSubmenu: boolean = false;
    showSubmenu2: boolean = false;
    constructor() {}

    ngOnInit() {}
}
