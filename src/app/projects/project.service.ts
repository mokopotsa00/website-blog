import { Injectable } from '@angular/core'

import { Project } from './project.model'
import { Subject } from 'rxjs';

@Injectable()
export class ProjectService{
    public projectsLoaded: Subject<Project[]>
    private projects: Project[] = [
        new Project( 1, 
            'The real application using latest angular 7 on front-end',
            'the-real-application-using-latest-angular-7-on-front-end',
            'design',
            'The real application using latest angular 7 on front-end',
            '../../assets/img/portfolio/1.jpg'
        ),
        new Project( 2, 
            'website template',
            'website-template',
            'photography',
            'The real application using latest angular 7 on front-end',
            '../../assets/img/portfolio/2.jpg'
        ),
        new Project( 3, 
            'Real CURD application using Node at the back-end and Angular-4 at the front-end',
            'real-crud-application-using-node-at-the-back-end-and-angular-4-at-the-front-end',
            'development',
            'Real CURD application using Node at the back-end and Angular-4 at the front-end',
            '../../assets/img/portfolio/3.jpg'
        ),
        new Project( 4, 
            'APIs build on C# .Net Core for managing the sharing and storing of files',
            'apis-build-on-c#-net-core-for-managing-the-sharing-and-storing-of-files',
            'photography',
            'APIs build on C# .Net Core for managing the sharing and storing of files',
            '../../assets/img/portfolio/4.jpg'
        ),
        new Project( 5, 
            'Web app build with .Net MVC',
            'web-app-build-with-net-mvc',
            'design',
            'web-app-build-with-net-mvc',
            '../../assets/img/portfolio/5.jpg'
        ),
        new Project( 6, 
            'POS in .Net',
            'pos-in-net',
            'photography',
            'Point Of Sale in .Net',
            '../../assets/img/portfolio/6.jpg'
        ),
    ];

    setProjects(projects:Project[]){
        this.projects = projects;
        this.projectsLoaded.next( this.projects.slice() );
    }

    getProjects(){
        return this.projects.slice();
    }

    getProject( slug: string){
        this.projects.map( project => {
            if( project.slug === slug ){
                return project;
            }
        });
        return null;
    }
}