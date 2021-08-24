import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    declarations: [],
})
export class SharedModule {}
