import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Day, TimeField, TimetableService } from "~/app/shared/timetable.service";

@Component({
    selector: "detail",
    templateUrl: "./timefield-detail.component.html"
})
export class TimefieldDetailComponent implements OnInit {

    day: Day;
    timeField: TimeField;

    constructor(
        private _timetable: TimetableService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit() {
        const dayID = +this._route.snapshot.params.day;
        // Todo: Google: WTF does this plus do, everything breaks if removed.
        this._timetable.getDayById(String(dayID));
    }

    navigateBack(): void {
        this._routerExtensions.back();
    }
}
