import { Component } from "@angular/core";
import profileData from "./profile.json";

@Component({
  selector: "profile-comp",
  template: `<div>
      <img src="{{ avatar }}" alt="User avatar" />
      <p>{{ username }}</p>
      <p>{{ tag }}</p>
      <p>{{ location }}</p>
    </div>
    <ul>
      <li>
        <span>Followers </span>
        <span>{{ followers }}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{{ views }}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{{ likes }}</span>
      </li>
    </ul>`,
})
export class ProfileComponent {
  avatar: any = profileData.avatar;
  username: string = profileData.username;
  tag: string = profileData.tag;
  location: string = profileData.location;
  followers:number = profileData.stats.followers;
  views:number = profileData.stats.views;
  likes:number = profileData.stats.likes;
}

