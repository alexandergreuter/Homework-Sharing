import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AccountComponent } from "./account.component";
import { TimetableComponent } from "~/app/account/timetable/timetable.component";
import { TimefieldDetailComponent } from "~/app/account/timetable/timefield-detail/timefield-detail.component";

const routes: Routes = [
    {path: "default", component: AccountComponent},
    {path: "timetable", component: TimetableComponent},
    {path: "timetable/:day/:timefield", component: TimefieldDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AccountRoutingModule {
}
