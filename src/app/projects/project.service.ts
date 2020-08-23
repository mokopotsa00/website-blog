import { Injectable } from '@angular/core'

import { Project } from './project.model'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProjectService{
    public isInvalidProjectSlug: boolean = false;

    constructor(private router:Router){}

    private projects: Project[] = [
        new Project( 1, 
            'The real application using latest angular 7 on front-end',
            'the-real-application-using-latest-angular-7-on-front-end',
            'The real application using latest angular 7 on front-end',
            'design',
            'The real application using latest angular 7 on front-end',
            '../../assets/img/portfolio/1.jpg'
        ),
        new Project( 2, 
            'website template',
            'website-template',
            'website template',
            'photography',
            'The real application using latest angular 7 on front-end',
            '../../assets/img/portfolio/2.jpg'
        ),
        new Project( 3, 
            'Real CURD application using Node at the back-end and Angular-4 at the front-end',
            'real-crud-application-using-node-at-the-back-end-and-angular-4-at-the-front-end',
            'Real CURD application using Node at the back-end and Angular-4 at the front-end',
            'development',
            'Real CURD application using Node at the back-end and Angular-4 at the front-end',
            '../../assets/img/portfolio/3.jpg'
        ),
        new Project( 4, 
            'APIs build on C# .Net Core for managing the sharing and storing of files',
            'apis-build-on-c#-net-core-for-managing-the-sharing-and-storing-of-files',
            'APIs build on C# .Net Core for managing the sharing and storing of files',
            'photography',
            'APIs build on C# .Net Core for managing the sharing and storing of files',
            '../../assets/img/portfolio/4.jpg'
        ),
        new Project( 5, 
            'Web app build with .Net MVC',
            'web-app-build-with-net-mvc',
            'Web app build with .Net MVC',
            'design',
            'web-app-build-with-net-mvc',
            '../../assets/img/portfolio/5.jpg'
        ),
        new Project( 6, 
            'POS in .Net',
            'pos-in-net',
            'pos-in-net',
            'photography',
            'Point Of Sale in .Net',
            '../../assets/img/portfolio/6.jpg'
        ),
    ];

    setProjects(projects:Project[]){
        this.projects = projects;
    }

    getProjects(){
        return this.projects.slice();
    }

    getProject( slug: string){
        slug = slug.toLowerCase();
        for(let i=0; i <this.projects.length; i++){
            if( this.projects[i].slug === slug ){
                return{project:  this.projects[i], slug: ''};
            }
        }
        let slugSplited = slug.split('-');
        //Get first three letters from url param: slug
        slugSplited[0] = slugSplited[0] === ''? undefined : slugSplited[0];
        slugSplited[1] = slugSplited[1] === ''? undefined : slugSplited[1];
        slugSplited[2] = slugSplited[2] === ''? undefined : slugSplited[2];
        //Get last three letters from url param: slug
        slugSplited[slugSplited.length-3] = slugSplited[slugSplited.length-3] === '' ? undefined : slugSplited[slugSplited.length-3];
        slugSplited[slugSplited.length-2] = slugSplited[slugSplited.length-2] === '' ? undefined : slugSplited[slugSplited.length-2];
        slugSplited[slugSplited.length-1] = slugSplited[slugSplited.length-1] === '' ? undefined : slugSplited[slugSplited.length-1];

        let firstSplit = slugSplited[0] +'-'+ slugSplited[1] +'-'+slugSplited[2];
        let secondSplit = slugSplited[slugSplited.length - 3] +'-'+ slugSplited[slugSplited.length - 2] +'-'+slugSplited[slugSplited.length - 1];
       
        for(let i=0; i <this.projects.length; i++){
            if(this.projects[i].slug.includes(firstSplit) || this.projects[i].slug.includes(secondSplit) ){
                return  {project: this.projects[i], slug: this.projects[i].slug};
            }
        }

        this.isInvalidProjectSlug = true;
        return;
    }
}