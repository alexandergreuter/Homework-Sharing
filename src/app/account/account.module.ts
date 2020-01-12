import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AccountRoutingModule,
        CommonModule
    ],
    declarations: [
        AccountComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AccountModule {
}
