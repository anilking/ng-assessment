import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Array<any> = [];
  constructor(private postService: PostserviceService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts () {
    this.postService.getPosts()
        .subscribe( (result: any) => {
          this.posts = result;
        });
  }

  ngOnDestroy () {
    
  }


}
