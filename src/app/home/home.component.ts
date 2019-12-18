import { Component, OnInit } from "@angular/core";

import { DataItem, DataService } from "../shared/data.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService,
                private _route: ActivatedRoute,
                private _routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(id: number) {
        this._routerExtensions.navigate(["../item", id], {relativeTo: this._route});
    }
}
