import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//newTab:new/default//accountTab:account/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab"
    },
    {
        path: "new",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/new/new.module").then((m) => m.NewModule),
        outlet: "newTab"
    },
    {
        path: "account",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/account/account.module").then((m) => m.AccountModule),
        outlet: "accountTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
