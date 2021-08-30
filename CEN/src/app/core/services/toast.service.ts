import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ToastMessageStatus, ToastMessage } from "../models/toast-message";

@Injectable({
    providedIn: "root",
})
export class ToastService {
    subject: Subject<ToastMessage> = new Subject<ToastMessage>();
    messages: ToastMessage[] = [];
    constructor() {}

    sendMessage(content: string, style: ToastMessageStatus) {
        const message = new ToastMessage(content, style);
        this.subject.next(message);

        this.messages.push(message);
        setTimeout(() => {
            this.messages.splice(this.messages.indexOf(message, 1));
        }, 5000 * this.messages.length);
    }

    getMessage(): Observable<ToastMessage> {
        return this.subject.asObservable();
    }
}
