import { Injectable } from "@angular/core";
import { ToastMessageStatus, ToastMessage } from "../models/toast-message";

@Injectable({
    providedIn: "root",
})
export class ToastService {
    messages: ToastMessage[] = [];
    constructor() {}

    sendMessage(content: string, style: ToastMessageStatus) {
        const message = new ToastMessage(content, style);
        this.messages.push(message);
        setTimeout(() => {
            this.messages.splice(this.messages.indexOf(message, 1));
        }, 5000 * this.messages.length);
    }
}
