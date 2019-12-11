import { Component, OnInit } from "@angular/core";
import { DataItem, DataService } from "~/app/shared/data.service";
import { requestPermissions, takePicture } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "New",
    templateUrl: "./new.component.html"
})
export class NewComponent implements OnInit {

    item: DataItem = this.intialItem();
    saveToGallery: boolean = false;

    constructor(private _data: DataService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize changes for the view.
    }

    save(): void {
        this._data.addItem(this.item);
        this.item = this.intialItem();
    }

    intialItem(): DataItem {
        return {
            id: 0,
            name: "",
            description: "",
            due: new Date(),
            image: new Image()
        };
    }

    onTakePictureTap(args) {
        requestPermissions().then(
            () => this.capture(),
            () => alert("permissions rejected")
        );
    }

    capture() {
        takePicture({width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery})
            .then((imageAsset: ImageAsset) => {
                this.item.image.src = imageAsset;
            }, (error) => {
                console.log("Error: " + error);
            });
    }
}
