import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AccountRoutingModule
    ],
    declarations: [
        AccountComponent,
        TimetableComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AccountModule {
}
