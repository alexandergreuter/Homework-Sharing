import { Component, OnInit } from "@angular/core";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    async ngOnInit(): Promise<void> {
        try {
            await firebase.init({
                persist: false
            });
            console.log(">>>>> Firebase initialized");
        } catch (err) {
            console.log(">>>>> Firebase init error: " + err);
        }
    }
}
