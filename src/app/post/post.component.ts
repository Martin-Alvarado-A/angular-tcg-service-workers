import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
}
