import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { DataItem, DataService } from "../../shared/data.service";

@Component({
    selector: "Detail",
    templateUrl: "./homework-detail.component.html"
})
export class HomeworkDetailComponent implements OnInit {
    item: DataItem;
    changes: DataItem;
    changed = false;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        // Todo: Google: WTF does this plus do, everything breaks if removed.
        this.item = this._data.getItem(id);
        this.changes = {
            id: this.item.id,
            name: this.item.name,
            description: this.item.description,
            due: this.item.due
        };
    }

    navigateBack(): void {
        if (this.changed) {
            dialogs.confirm({
                message: "Are you sure you want to leave? Changes will be lost.",
                okButtonText: "leave",
                cancelButtonText: "cancel",
                neutralButtonText: "save changes"
            }).then((result) => {
                switch (result) {
                    case true:
                        this._routerExtensions.back();
                        break;
                    case false:
                        break;
                    case undefined:
                        this.save();
                        break;
                }
            });
        } else {
            this._routerExtensions.back();
        }
    }

    save(): void {
        this._data.updateItem(this.changes);
        dialogs.alert("Changes saved successfully");
        this._routerExtensions.back();
    }

    previewImage() {
        this._routerExtensions.navigate(["image"], {relativeTo: this._route});
    }
}
