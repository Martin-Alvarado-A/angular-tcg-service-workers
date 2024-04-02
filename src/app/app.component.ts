import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostComponent } from './post/post.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-tcg-service-workers';
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(take(1))
      .subscribe((fetchedPosts) => {
        console.log(
          `🔎 | AppComponent | ngOnInit > fetchedPosts:`,
          fetchedPosts
        );
        this.posts = fetchedPosts;
      });
  }
}
