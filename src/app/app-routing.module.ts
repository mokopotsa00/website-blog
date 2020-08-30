import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { SearchResponse } from './search-response/search-response.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/:slug', component: SingleProjectComponent},
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:slug', component: SingleBlogComponent },
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