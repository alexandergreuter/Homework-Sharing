import { Component, Input, OnInit } from "@angular/core";
import { Day, TimeField, TimetableService } from "~/app/shared/timetable.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "day-preview",
    templateUrl: "./day-preview.component.html",
    styleUrls: ["./day-preview.component.css"]
})
export class DayPreviewComponent implements OnInit {
    @Input()
    dayId: string;
    day: Day;

    constructor(
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private _timetableService: TimetableService
    ) {
    }

    ngOnInit(): void {
        this.day = this._timetableService.getDayById(this.dayId);
    }

    onTimeFieldTap(timeField: TimeField) {
        this._routerExtensions.navigate([this.day.id, timeField.id], {relativeTo: this._route});
    }
}
