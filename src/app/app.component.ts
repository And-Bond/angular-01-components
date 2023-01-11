import { Component } from "@angular/core";

@Component({
  selector: "app-comp",
  template: `
    <profile-comp></profile-comp>
    <stats-comp [title]="statsTitle" ></stats-comp>
    <friends-comp></friends-comp>
    <transactions-comp></transactions-comp>
  `,
})
export class AppComponent {
  statsTitle:string='Upload Stats'
}
