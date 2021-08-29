import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ILoginModel } from "../../models/loginModel";
import { AccountService } from "../../services/account.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    hidePassword = true;
    loginForm = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
    });
    returnUrl: string = "/";

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params["returnUrl"] !== undefined)
                this.returnUrl = params["returnUrl"];
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            var loginModel = this.loginForm.value as ILoginModel;
            if (this.accountService.login(loginModel)) {
                this.router.navigate([this.returnUrl]);
            }
        }
    }
}
