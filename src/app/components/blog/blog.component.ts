import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('blog');
  }

}
