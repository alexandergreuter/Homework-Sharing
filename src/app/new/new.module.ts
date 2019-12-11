import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NewRoutingModule } from "./new-routing.module";
import { NewComponent } from "./new.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NewRoutingModule
    ],
    declarations: [
        NewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewModule {
}
