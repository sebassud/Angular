import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserPermission } from "../models/user-permission.enum";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        return this.authorizationProcess(childRoute);
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        if (this.authenticationService.isLogged) {
            return this.authorizationProcess(route);
        } else {
            return this.authenticationProcess();
        }
    }

    private authenticationProcess(): boolean {
        const navigation = this.router.getCurrentNavigation();
        let url = "/";

        if (navigation) {
            url = navigation.extractedUrl.toString();
        }
        this.router.navigate(["/account/login"], {
            queryParams: { returnUrl: url },
        });
        return false;
    }

    private authorizationProcess(
        route: Route | ActivatedRouteSnapshot
    ): boolean {
        let permissions: UserPermission[] = [];
        if (route.data && route.data["permissions"]) {
            permissions = route.data["permissions"] as Array<UserPermission>;
        }
        if (permissions.length === 0) {
            return true;
        }

        const intersection = permissions.filter((value) =>
            this.authenticationService.userValue?.userPermissions.includes(
                value
            )
        );
        if (intersection.length !== 0) {
            return true;
        }

        this.router.navigate(["/"]);
        return false;
    }
}
