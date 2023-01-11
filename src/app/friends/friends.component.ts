import { Component } from "@angular/core";
import friendsData from "./friends.json";

@Component({
  selector: "friends-comp",
  template: `
    <ul>
      <li *ngFor="let friend of friends">
        <!-- <span *ngIf="friend.isOnline"></span> -->
        <img src="{{ friend.avatar }}" alt="User avatar" width="48" />
        <p>
          {{ friend.name }}
        </p>
      </li>
    </ul>
  `,
})
export class FriendsComponent {
  friends: Array<object> = friendsData;
}

// <ul>
//       {friends.map(friend => {
//           <li >
//             <span
//                ${
//                 friend.isOnline ? styles.online : styles.offline
//               }`}
//             ></span>
//             <img
//               src={friend.avatar}
//               alt="User avatar"
//               width="48"
//             />
//             <p>{friend.name}</p>
//           </li>
//       })}
//     </ul>
