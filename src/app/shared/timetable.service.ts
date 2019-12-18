import { Injectable } from "~/node_modules/@angular/core";

export interface Day {
    id: string;
    timeFields: Array<TimeField>;
}

export interface Subject {
    name: string;
}

export interface TimeField {
    id: number;
    start: Date;
    end: Date;
    subject?: Subject;
}

@Injectable({
    providedIn: "root"
})
export class TimetableService {
    private times: Array<string> = new Array<string>("07:45", "08:30", "08:35", "09:20", "09:30", "10:15", "10:30", "11:15", "11:25", "12:10", "12:15", "13:00", "13:05", "13:50", "14:55", "15:40", "15:50", "16:35");
    private weekdays: Array<string> = new Array<string>("Mon", "Tue", "Wed", "Thu", "Fri");
    private timeFieldsPerDay = new Array<TimeField>(this.times.length / 2);
    private week: Array<Day> = new Array<Day>();

    constructor() {
        for (let i: number = 0; i < this.timeFieldsPerDay.length; i) {
            this.timeFieldsPerDay[i] = {
                id: i,
                start: new Date("1995-12-17T" + this.times[2 * i]),
                end: new Date("1995-12-17T" + this.times[(2 * i) + 1])
            };
            i++;
        }

        for (const day of this.weekdays) {
            this.week.push({
                id: day,
                timeFields: {...[], ...this.timeFieldsPerDay}
            });
            // Todo check if this isn't painfully slow i'd prefer a fixed size array and a for i loop
            //  also maybe there's a better option to clone?
        }
    }

    updateTimefield(day: Day, timeField: TimeField) {
        this.week.filter((entry) => entry.id === day.id)[0]
            .timeFields.filter((entry) => entry.id === timeField.id)[0] = timeField;
    }

    getWeek(): Array<Day> {
        console.log(this.week);

        return this.week;
    }
}
