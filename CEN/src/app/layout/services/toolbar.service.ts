import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Injectable({
    providedIn: "root",
})
export class ToolbarService {
    constructor(private authenticationService: AuthenticationService) {}

    logout(): boolean {
        this.authenticationService.logout();
        return true;
    }

    descriptionUser(): string {
        return `${this.authenticationService.userValue?.firstName} ${this.authenticationService.userValue?.lastName} (${this.authenticationService.userValue?.username})`;
    }
}
