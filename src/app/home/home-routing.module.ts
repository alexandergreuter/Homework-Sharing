import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { HomeworkDetailComponent } from "./homework-detail/homework-detail.component";

const routes: Routes = [
    {path: "default", component: HomeComponent},
    {path: "item/:id", component: HomeworkDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
