import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/core/models/user";
import { AuthenticationService } from "src/app/core/services/authentication.service";

@Injectable({
    providedIn: "root",
})
export class ToolbarService {
    constructor(private authenticationService: AuthenticationService) {}

    logout(): boolean {
        this.authenticationService.setUser(null);
        return true;
    }

    getUser(): Observable<IUser | null> {
        return this.authenticationService.user;
    }
}
