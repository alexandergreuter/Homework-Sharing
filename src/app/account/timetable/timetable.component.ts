import { Component, OnInit } from "@angular/core";
import { Day, TimetableService } from "~/app/shared/timetable.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { DataService } from "~/app/shared/data.service";

@Component({
    selector: "ns-timetable",
    templateUrl: "./timetable.component.html",
    styleUrls: ["./timetable.component.css"]
})
export class TimetableComponent implements OnInit {

    week: Array<Day>;

    constructor(
        private _timetableService: TimetableService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private _itemService: DataService
    ) {
    }

    ngOnInit() {
        this.week = this._timetableService.getWeek();
    }

    navigateBack(): void {
        this._routerExtensions.back();
    }
}
