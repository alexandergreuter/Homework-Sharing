import { Injectable, NgZone, OnInit } from "@angular/core";
import { Image } from "tns-core-modules/ui/image";
import { Observable } from "rxjs";

const firebase = require("nativescript-plugin-firebase/app");
const fs = require("tns-core-modules/file-system");

export class DataItem {

    id: string;
    name: string;
    description: string;
    due: Date;
    image?: string;

    constructor(template: any, id: string) {
        this.id = id;
        this.name = template.name;
        this.description = template.description;
        this.due = template.due;
        this.image = template.image;
    }
}

@Injectable({
    providedIn: "root"
})
export class DataService implements OnInit {

    private items = firebase.firestore().collection("homeworks");

    ngOnInit(): void {
        console.log("initializing");
    }

    getItems(): Array<DataItem> {
        const retArr: Array<DataItem> = new Array<DataItem>();

        this.items.onSnapshot((querySnapshot) => {
            retArr.length = 0;
            querySnapshot.forEach((doc) => {
                retArr.push(new DataItem(doc.data(), doc.id));
            });
        });

        return retArr;
    }

    getItem(id: string): DataItem {
        const item = {
            id: "",
            name: "",
            description: "",
            due: new Date(),
            image: ""
        };

        this.items.doc(id).get({source: "cache"}).then((doc) => {
            item.id = id;
            item.name = doc.data().name;
            item.description = doc.data().description;
            item.due = doc.data().due;
            item.image = doc.data().image;
        });

        return item;
    }

    addItem(dataItem: DataItem): void {
        this.items.add(dataItem);
    }

    updateItem(dataItem: DataItem): void {
        this.items.doc(dataItem.id).update(
            {
                id: dataItem.id,
                name: dataItem.name,
                description: dataItem.description,
                due: dataItem.due,
                image: dataItem.image,
                updateTimestamp: firebase.firestore().FieldValue().serverTimestamp(),
                location: firebase.firestore().GeoPoint(4.34, 5.67)
            }
        );
    }

    uploadImage(imagePath: string): void {

        const metadata = {
            contentType: "demo/test",
            contentLanguage: "fr",
            customMetadata: {
                foo: "bar",
                foo2: "bar2"
            }
        };
    }
}
