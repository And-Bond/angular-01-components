import { Component } from "@angular/core";
import friendsData from "./friends.json";

@Component({
  selector: "friends-comp",
  template: `
    <ul class="friendList">
      <li *ngFor="let friend of friends" class="item">
        <span [class.online]="friend.isOnline" [class.offline]="!friend.isOnline" class="status"></span>
        <img class="avatar" src="{{ friend.avatar }}" alt="User avatar" width="48" />
        <p class="name">
          {{ friend.name }}
        </p>
      </li>
    </ul>
  `,
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  friends: Array<object> = friendsData;
}

