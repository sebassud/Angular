export class ToastMessage {
    content: string;
    style: ToastMessageStatus;

    constructor(content: string, style: ToastMessageStatus) {
        this.content = content;
        this.style = style;
    }
}

export enum ToastMessageStatus {
    info,
    error,
    success,
}
