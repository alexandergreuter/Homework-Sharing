import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { HomeworkDetailComponent } from "./homework-detail/homework-detail.component";
import { ImagePreviewComponent } from "~/app/home/homework-detail/image-preview/image-preview.component";

const routes: Routes = [
    {path: "default", component: HomeComponent},
    {path: "item/:id", component: HomeworkDetailComponent},
    {path: "item/:id/image", component: ImagePreviewComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
