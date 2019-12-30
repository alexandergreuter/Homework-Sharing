import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Color } from "tns-core-modules/color";

export interface Day {
    id: string;
    timeFields: Array<TimeField>;
}

export interface Subject {
    id: number;
    name: string;
    color: Color;
}

export class TimeField {
    color: Color;
    id: number;
    start: Date;
    end: Date;
    subject?: Subject;

    constructor(id: number, start: Date, end: Date, subject?: Subject) {
        this.id = id;
        this.start = start;
        this.end = end;

        if (subject !== undefined) {
            this.subject = subject;
            this.color = subject.color;
        } else {
            this.color = new Color(0, 255, 255, 255);
        }
    }
}

@Pipe({
    name: "timeFormat"
})
export class TimeFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "hh:mm");
    }
}

@Injectable({
    providedIn: "root"
})
export class TimetableService {
    private times: Array<string> = new Array<string>("07:45", "08:30", "08:35", "09:20", "09:30", "10:15", "10:30", "11:15", "11:25", "12:10", "12:15", "13:00", "13:05", "13:50", "14:55", "15:40", "15:50", "16:35");
    private weekdays: Array<string> = new Array<string>("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
    private timeFieldsPerDay = new Array<TimeField>(this.times.length / 2);
    private week: Array<Day> = new Array<Day>();
    private subjects: Array<Subject> = new Array<Subject>();

    constructor() {
        for (let i: number = 0; i < this.timeFieldsPerDay.length; i) {
            this.timeFieldsPerDay[i] = new TimeField(i, new Date("1995-12-17T" + this.times[2 * i]), new Date("1995-12-17T" + this.times[(2 * i) + 1]));
            i++;
        }

        for (const day of this.weekdays) {
            this.week.push({
                id: day,
                timeFields: this.timeFieldsPerDay
            });
            // Todo check if this isn't painfully slow i'd prefer a fixed size array and a for i loop
            //  also maybe there's a better option to clone?
        }
    }

    getWeek(): Array<Day> {
        return this.week;
    }

    getDayById(id: string): Day {
        return this.week.filter((item) => item.id === id)[0];
    }

    updateTimefield(day: Day, timeField: TimeField) {
        this.week.filter((entry) => entry.id === day.id)[0]
            .timeFields.filter((entry) => entry.id === timeField.id)[0] = timeField;
    }

    InitializeEmptySubject(): Subject {
        return {
            id: 0,
            name: "",
            color: new Color(1, 150, 150, 250)
        };
    }

    updateSubject(subject: Subject): void {
        this.subjects.filter((item) => item.id === subject.id)[0] = subject;
    }

    addSubject(subject: Subject) {
        subject.id = this.subjects.length + 1;
        this.subjects.push(subject);
    }
}
