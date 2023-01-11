import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { StatsComponent } from "./stats/stats.component";
import { FriendsComponent } from "./friends/friends.component";
import { TransactionsComponent } from "./transactions/transactions.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProfileComponent,
    StatsComponent,
    FriendsComponent,
    TransactionsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
