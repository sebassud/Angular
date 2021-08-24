import { ErrorHandler, Injectable } from "@angular/core";
import { LoggerService } from "../services/logger.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private logger: LoggerService) {}

    handleError(error: Error): void {
        this.logger.error(error);
    }
}
