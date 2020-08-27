import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { SearchResponse } from './search-response/search-response.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutMeComponent },
    { path: 'skills', component: MySkillsComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/:slug', component: SingleProjectComponent},
    { path: 'blog', component: BlogComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: ':slug', component: SearchResponse},
    { path: '**', component: SearchResponse}
]
@NgModule({
    imports: [ 
        RouterModule.forRoot(appRoutes)
    ],
    exports:[ RouterModule]
})
export class AppRoutingModule{

}