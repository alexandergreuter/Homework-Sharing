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

    constructor(private _items: DataService,
                private _route: ActivatedRoute,
                private _routerExtensions: RouterExtensions) {
    }

    onItemTap(id: string) {
        this._routerExtensions.navigate(["../item", id], {relativeTo: this._route});
    }

    ngOnInit(): void {
        // hack but I don't have the time to make it properly
        this._items.getItems();
        setTimeout(() => {
            this.items = this._items.getItems();
        }, 1000);
    }

    refresh() {
        this.items = this._items.getItems();
    }
}
