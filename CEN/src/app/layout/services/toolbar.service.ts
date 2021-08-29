import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Injectable({
    providedIn: "root",
})
export class ToolbarService {
    constructor(private aouthenticationService: AuthenticationService) {}

    logout(): boolean {
        this.aouthenticationService.logout();
        return true;
    }
}
