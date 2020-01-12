import { Component, OnInit } from "@angular/core";
import { DataItem, DataService } from "~/app/shared/data.service";
import { requestPermissions, takePicture } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";
import { Image } from "tns-core-modules/ui/image";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ImageSource } from "@nativescript/core/image-source/image-source";
import { knownFolders, path } from "tns-core-modules/file-system/file-system";

var imageSource = require("image-source");

@Component({
    selector: "New",
    templateUrl: "./new.component.html"
})
export class NewComponent implements OnInit {

    item: DataItem = {
        id: "",
        name: "",
        description: "",
        due: new Date(),
        image: ""
    };
    saveToGallery: boolean = false;

    constructor(private _data: DataService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize changes for the view.
    }

    save(): void {
        if (this.item.name === "" || this.item.description === "") {
            dialogs.alert("Make sure to fill in all values");
        } else {
            this._data.addItem(this.item);
            this.item = {
                id: "",
                name: "",
                description: "",
                due: new Date(),
                image: ""
            };
        }
    }

    getImage(): ImageSource {
        return ImageSource.fromFileSync(this.item.image);
    }

    onTakePictureTap() {
        requestPermissions().then(
            () => this.capture(),
            () => alert("permissions rejected")
        );
    }

    capture() {

        let asset;
        takePicture({width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery})
            .then((imageAsset: ImageAsset) => {
                asset = imageAsset;

                ImageSource.fromAsset(asset)
                    .then((imgSource: ImageSource) => {
                        const folderPath: string = knownFolders.documents().path;
                        // stupid hack but got no time to fix
                        const fileName: string = Math.random().toString(36).substring(2, 15)
                            + Math.random().toString(36).substring(2, 15) + ".jpg";
                        const filePath: string = path.join(folderPath, fileName);
                        const saved: boolean = imgSource.saveToFile(filePath, "jpg");

                        if (saved) {
                            this.item.image = filePath;
                            console.log("Saved: " + filePath);
                            console.log("Image saved successfully!");
                        }
                    });

            }, (error) => {
                console.log("Error: " + error);
            });
    }
}
