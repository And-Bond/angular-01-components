import { Component, Input } from "@angular/core";
import statistics from './stats.json'

@Component({
    selector: 'stats-comp',
    template: `
    <section>
    <h2 *ngIf="title">{{title}}</h2>
        <ul>
            <li *ngFor="let stat of stats">
                <span>{{stat.label}}</span>
                <span>{{stat.percentage}}% </span>
            </li>
        </ul>
    </section>
    `
})

export class StatsComponent {
    stats:Array<object> = statistics;
    @Input() title:string = '';
    
}

