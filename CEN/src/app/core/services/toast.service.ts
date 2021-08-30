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
    }

    getMessage(): Observable<ToastMessage> {
        return this.subject.asObservable();
    }
}
