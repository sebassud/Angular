import { Injectable } from "@angular/core";
import { IUser } from "src/app/core/models/user";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { ILoginModel } from "../models/loginModel";

@Injectable({
    providedIn: "root",
})
export class AccountService {
    constructor(private aouthenticationService: AuthenticationService) {}

    login(loginModel: ILoginModel): boolean {
        var user: IUser = {
            username: loginModel.username,
            firstName: "Imię",
            lastName: "Nazwisko",
            jwtToken: "token",
            id: 0,
            userPermissions: [],
        };
        this.aouthenticationService.setUser(user);
        return true;
    }
}
