import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface, SwiperDirective } from 'ngx-swiper-wrapper';

import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  project: Project;
  projectSlug: string;
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  public slides = [];

  constructor( private projectServce: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.projectSlug = params['slug'];
      this.project = this.projectServce.getProject(this.projectSlug);
      this.slides = [
        "../../../assets/img/my-site.PNG",
        this.project.featuredImage,
        this.project.featuredImage,
        this.project.featuredImage,
        this.project.featuredImage,
      ];
    })
  }

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    }
  };


}
