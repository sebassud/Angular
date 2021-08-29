import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ToolbarService } from "../../services/toolbar.service";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
})
export class ToolbarComponent implements OnInit {
    @Output() toggleMenuEvent = new EventEmitter();
    constructor(
        private toolbarService: ToolbarService,
        private router: Router
    ) {}

    ngOnInit() {}

    toggleMenu() {
        this.toggleMenuEvent.emit();
    }

    logout() {
        if (this.toolbarService.logout()) {
            this.router.navigate(["Account/Login"]);
        }
    }
}
