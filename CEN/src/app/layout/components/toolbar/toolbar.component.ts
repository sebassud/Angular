import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
})
export class ToolbarComponent implements OnInit {
    @Output() toggleMenuEvent = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    toggleMenu() {
        this.toggleMenuEvent.emit();
    }
}
