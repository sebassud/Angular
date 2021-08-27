import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-page-menu-item",
    templateUrl: "./page-menu-item.component.html",
    styleUrls: ["./page-menu-item.component.scss"],
})
export class PageMenuItemComponent implements OnInit {
    readonly page1Path: string = "/Home/Page1";
    readonly page2Path: string = "/Home/Page2";
    readonly page3Path: string = "/Home/Page3";
    pagePaths: string[] = [this.page1Path, this.page2Path, this.page3Path];
    expand: boolean = false;
    constructor(private router: Router) {
        this.expand = this.pagePaths.includes(router.url);
        router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                this.expand = this.pagePaths.includes(
                    (event as NavigationEnd).url
                );
            });
    }

    ngOnInit() {}
}
