import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { ToastMessageStatus } from "../models/toast-message";
import { ToastService } from "./toast.service";

@Injectable({
    providedIn: "root",
})
export class EndpointBaseService {
    constructor(private toastService: ToastService) {}

    protected handleError(error: HttpErrorResponse) {
        if (error.status === 400) {
            for (let errorMessage of error.error.Errors) {
                this.toastService.sendMessage(
                    errorMessage,
                    ToastMessageStatus.error
                );
            }
        } else if (error.status === 500) {
            this.toastService.sendMessage(
                "Wystąpił nieoczekiwany błąd",
                ToastMessageStatus.error
            );
        }

        return throwError(error || "Server error");
    }
}
