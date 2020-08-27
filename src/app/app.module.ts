import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecaptchaModule, RecaptchaFormsModule  } from 'ng-recaptcha';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResponse } from './search-response/search-response.component';
import { PagePreloaderComponent } from './page-preloader/page-preloader.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { ProjectService } from './projects/project.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    BlogComponent,
    ContactsComponent,
    FooterComponent,
    NotFoundComponent,
    SearchResponse,
    PagePreloaderComponent,
    SingleProjectComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    SwiperModule,
    NgxImageZoomModule,
    NgxDatatableModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
