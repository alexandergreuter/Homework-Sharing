import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { TimefieldDetailComponent } from "./timetable/timefield-detail/timefield-detail.component";
import { TimeFormatPipe } from "~/app/shared/timetable.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AccountRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AccountComponent,
        TimetableComponent,
        TimefieldDetailComponent,
        TimeFormatPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AccountModule {
}
