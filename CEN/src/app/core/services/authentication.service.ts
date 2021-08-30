import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUser } from "../models/user";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    private readonly userStorageId = "UserId";
    private userSubject: BehaviorSubject<IUser | null>;
    public user: Observable<IUser | null>;

    public get userValue(): IUser | null {
        return this.userSubject.value;
    }

    public get isLogged(): Observable<boolean> {
        return this.userSubject.pipe(map((u) => u !== null));
    }

    constructor(private storageService: LocalStorageService) {
        this.userSubject = new BehaviorSubject<IUser | null>(this.getUser());
        this.user = this.userSubject.asObservable();
    }

    public setUser(user: IUser | null) {
        this.saveUser(user);
        this.userSubject.next(user);
    }

    public logout() {
        this.saveUser(null);
        this.userSubject.next(null);
    }

    private saveUser(user: IUser | null) {
        if (user === null) {
            this.storageService.remove(this.userStorageId);
        } else {
            this.storageService.save(this.userStorageId, user);
        }
    }

    private getUser(): IUser | null {
        return this.storageService.get(this.userStorageId);
    }
}
