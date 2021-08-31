import { Component, OnDestroy, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import {
    ToastMessage,
    ToastMessageStatus,
} from "src/app/core/models/toast-message";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
    selector: "app-toast",
    templateUrl: "./toast.component.html",
})
export class ToastComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    constructor(private toastService: ToastService, toastr: ToastrService) {
        toastr.toastrConfig.closeButton = true;
        toastr.toastrConfig.progressBar = true;
        toastr.toastrConfig.maxOpened = 5;
        this.subscription = this.toastService
            .getMessage()
            .subscribe((message) => {
                switch (message.style) {
                    case ToastMessageStatus.success:
                        toastr.success(message.content);
                        break;
                    case ToastMessageStatus.error:
                        toastr.error(message.content);
                        break;
                    case ToastMessageStatus.info:
                        toastr.info(message.content);
                        break;
                }
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {}
}
