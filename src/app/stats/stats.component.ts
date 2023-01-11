import { Component, Input } from "@angular/core";
import statistics from './stats.json'


@Component({
    selector: 'stats-comp',
    template: `
    <section class="statistics">
    <h2 *ngIf="title" class="title">{{title}}</h2>
        <ul class="statList">
            <li *ngFor="let stat of stats" style=" backgroundColor: 'red';" class="item">
                <span class="label">{{stat.label}}</span>
                <span class="statistics">{{stat.percentage}}% </span>
            </li>
        </ul>
    </section>
    `,
    styleUrls: ["./stats.component.css"]
})

export class StatsComponent {
    stats:Array<object> = statistics;
    @Input() title:string = '';
    
}

