import { Component } from "@angular/core";
import profileData from "./profile.json";

@Component({
  selector: "profile-comp",
  template: `<div class="profile">
  <div class="description">
      <img  class="avatar" src="{{ avatar }}" alt="User avatar" />
      <p  class="name normal">{{ username }}</p>
      <p  class="tag">{{ tag }}</p>
      <p  class="location">{{ location }}</p>
  </div>
    <ul class="stats">
      <li class="block">
        <span class="label">Followers </span>
        <span class="quantity">{{ followers }}</span>
      </li>
      <li class="block">
        <span class="label">Views </span>
        <span class="quantity">{{ views }}</span>
      </li>
      <li class="block">
        <span class="label">Likes</span>
        <span class="quantity">{{ likes }}</span>
      </li>
    </ul>
    </div>`,
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  avatar: any = profileData.avatar;
  username: string = profileData.username;
  tag: string = profileData.tag;
  location: string = profileData.location;
  followers: number = profileData.stats.followers;
  views: number = profileData.stats.views;
  likes: number = profileData.stats.likes;
}
