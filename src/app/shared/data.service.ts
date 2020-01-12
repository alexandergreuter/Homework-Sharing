import { Injectable, OnInit } from "@angular/core";
import { Image } from "tns-core-modules/ui/image";
import { firestore } from "nativescript-plugin-firebase";
import docRef = firestore.docRef;

const firebase = require("nativescript-plugin-firebase/app");

export interface DataItem {
    id: number;
    name: string;
    description: string;
    due?: Date;
    image?: Image;
}

@Injectable({
    providedIn: "root"
})
export class DataService implements OnInit {

    private items = firebase.firestore().collection("homeworks");
    private itemCache: Array<DataItem> = new Array<DataItem>();

    ngOnInit(): void {
        console.log("initializing");
    }

    getItems(): Array<DataItem> {

        //Todo add items to array
        this.items.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });

        return this.itemCache;
    }

    getItem(id: number): DataItem {
        return this.itemCache.filter((item) => item.id === id)[0];
    }

    initializeEmptyItem(): DataItem {
        return {
            id: 0,
            name: "",
            description: "",
            due: new Date(),
            image: new Image()
        };
    }

    addItem(dataItem: DataItem): void {
        dataItem.id = this.items.length + 1;
        this.items.doc(dataItem.id).set(dataItem);
        this.itemCache.push(dataItem);
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
}
