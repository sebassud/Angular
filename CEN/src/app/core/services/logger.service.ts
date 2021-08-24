import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class LoggerService {
    constructor() {}

    public debug(msg: string) {
        let result = `Debug: ${msg}`;
        this.log(result);
    }

    public info(msg: string) {
        let result = `Info: ${msg}`;
        this.log(result);
    }

    public error(error: Error) {
        let result = `Error: ${error.message}, Stack: ${error.stack}`;
        this.log(result);
    }

    private log(msg: string) {
        if (!environment.production) {
            this.consoleLog(msg);
        }
    }

    private consoleLog(msg: string) {
        console.log(msg);
    }
}
