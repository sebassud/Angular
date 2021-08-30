import { Component, OnInit } from "@angular/core";
import { ToastMessageStatus } from "src/app/core/models/toast-message";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
    num = 0;
    constructor(private toastService: ToastService) {}

    ngOnInit() {}

    click() {
        this.toastService.sendMessage(
            `git-${this.num}`,
            ToastMessageStatus.success
        );
        this.num++;
    }

    click2() {
        this.toastService.sendMessage(
            `git-${this.num}`,
            ToastMessageStatus.info
        );
        this.num++;
    }
}
