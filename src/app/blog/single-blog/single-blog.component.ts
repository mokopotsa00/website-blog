import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Post } from '../post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  post: Post;
  postSlug: string;

  constructor( private blogService:BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) =>{
      this.postSlug = params['slug'];
      let results = this.blogService.getPost( this.postSlug );
      if (results !== undefined) {
        if (results.slug !== '') {
          // reload
          this.router.navigate(['../' + results.slug], {
            relativeTo: this.route
          });
        }
        this.post = results.project;
      }
    })
  }

}
