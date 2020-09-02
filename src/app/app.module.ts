import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntranceComponent } from './entrance/entrance.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: EntranceComponent },
      { path: 'news', component: NewsComponent },
      { path: 'projects', component: ProjectsComponent},
      { path: 'aboutUs', component: AboutUsComponent},
      { path: 'contactUs', component: ContactUsComponent}
    ]) 
  ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, EntranceComponent, LoadingScreenComponent, ContactUsComponent, NewsComponent, AboutUsComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
