import { Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './services/post';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome</h1>
  <div class="container">
    <ul>
      <li *ngFor="let post of posts">
        <!-- <p> ID: {{post.id}} </p> -->
        <h3>Title: {{post.title}} </h3>
        <p> {{post.body}} </p>
      </li>
    </ul>
  </div>
  `,
  providers: [PostService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts : Post[];
  constructor(private _postService : PostService) {
    _postService.getPost().then(
      ps => {this.posts = ps}
    );
  }
}
