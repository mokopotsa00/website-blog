import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BlogService } from '../blog/blog.service';
import { Post } from '../blog/post.model';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-search',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.scss']
})
export class SearchResponse implements OnInit {

  posts: Post[];

  displayedColumns: string[] = ['title', 'excerpt', 'date'];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor( private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
    this.dataSource = new MatTableDataSource(this.posts);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
