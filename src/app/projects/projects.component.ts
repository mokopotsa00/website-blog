import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  isPrevRouteIncorrect = false;

  constructor( private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.isPrevRouteIncorrect = this.projectService.isValidProjectSlug;
  }

  onFilter(event){
    let target = event.target;
    let filterMenu = document.getElementsByClassName('current');
    filterMenu[0].classList.remove('current');
    target.classList.add('current');
    let filterValue = target.getAttribute('data-filter');
    let allProjects = document.querySelectorAll('.tm_portfolio_list li');
    if( filterValue === '*'){
      for( let i = 0; i < allProjects.length; i++){
        (allProjects[i] as HTMLElement).style.display ='list-item';
      }
      return;
    }
    for( let i = 0; i < allProjects.length; i++){
      if( allProjects[i].classList.contains(filterValue) ){
        (allProjects[i] as HTMLElement).style.display ='list-item';
      }
      else{
        (allProjects[i] as HTMLElement).style.display ='none';
      }
    }
  }

}
