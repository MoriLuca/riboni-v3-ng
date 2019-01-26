import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

//services
import { GlobalRuntimeConfigService } from "./services/globalRuntimeConfig/global-runtime-config.service";
import { ApiService } from "./services/api/api.service";

//components
import { AppComponent } from './app.component';
import { TopMenuComponent } from './componenets/top-menu/top-menu.component';
import { HomeComponent } from './componenets/home/home.component';
import { NotFoundComponentComponent } from './componenets/not-found-component/not-found-component.component';
import { RecipesComponent } from './componenets/recipes/recipes.component';
import { NormalTagsComponent } from './componenets/monitor/normal-tags/normal-tags.component';
import { CriticalTagsComponent } from './componenets/monitor/critical-tags/critical-tags.component';
import { UtilityTagsComponent } from './componenets/monitor/utility-tags/utility-tags.component';
import { AlarmsTagsComponent } from './componenets/monitor/alarms-tags/alarms-tags.component';
import { ResumeComponent } from './componenets/monitor/resume/resume.component';






@NgModule({
  declarations: [
    AppComponent,

    TopMenuComponent,
    HomeComponent,
    NotFoundComponentComponent,
    RecipesComponent,
    NormalTagsComponent,
    CriticalTagsComponent,
    UtilityTagsComponent,
    AlarmsTagsComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component: HomeComponent},
      {path:"tags",component: NormalTagsComponent},
      {path:"criticalTags",component: CriticalTagsComponent},
      {path:"utilityTags",component: UtilityTagsComponent},
      {path:"alarmsTags",component: AlarmsTagsComponent},
      
      //esempi
      // {path:"laghi",component: LaghiComponent},
      // {path:"lago/:id",component: LagoComponent},
      {path:"**",component: NotFoundComponentComponent}
    ])
  ],
  providers: [
    GlobalRuntimeConfigService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
