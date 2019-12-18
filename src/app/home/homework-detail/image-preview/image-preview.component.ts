import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataItem, DataService } from "~/app/shared/data.service";

@Component({
    selector: "preview",
    templateUrl: "./image-preview.component.html"
})
export class ImagePreviewComponent implements OnInit {

    item: DataItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit() {
        const id = +this._route.snapshot.params.id;
        // Todo: Google: WTF does this plus do, everything breaks if removed.
        this.item = this._data.getItem(id);
    }

    navigateBack(): void {
        this._routerExtensions.back();
    }
}
