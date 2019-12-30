import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { TimefieldDetailComponent } from "./timetable/timefield-detail/timefield-detail.component";
import { TimeFormatPipe } from "~/app/shared/timetable.service";
import { CommonModule } from "@angular/common";
import { DayPreviewComponent } from './timetable/day-preview/day-preview.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AccountRoutingModule,
        CommonModule
    ],
    declarations: [
        AccountComponent,
        TimetableComponent,
        TimefieldDetailComponent,
        TimeFormatPipe,
        DayPreviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AccountModule {
}
