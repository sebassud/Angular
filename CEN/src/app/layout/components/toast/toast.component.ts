import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import {
    ToastMessage,
    ToastMessageStatus,
} from "src/app/core/models/toast-message";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
    selector: "app-toast",
    templateUrl: "./toast.component.html",
    styleUrls: ["./toast.component.scss"],
})
export class ToastComponent implements OnInit, OnDestroy {
    private readonly interval: number = 5000;
    private subscription: Subscription;
    messages: ToastMessage[] = [];

    get successStyle(): ToastMessageStatus {
        return ToastMessageStatus.success;
    }

    get errorStyle(): ToastMessageStatus {
        return ToastMessageStatus.error;
    }

    get infoStyle(): ToastMessageStatus {
        return ToastMessageStatus.info;
    }

    constructor(private toastService: ToastService) {
        this.subscription = this.toastService
            .getMessage()
            .subscribe((message) => {
                this.messages.push(message);
                console.log(this.interval * this.messages.length);
                setTimeout(() => {
                    this.messages.shift();
                }, this.interval * this.messages.length);
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {}
}
