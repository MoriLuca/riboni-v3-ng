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
import { LiveMonitorComponent } from './componenets/live-monitor/live-monitor.component';
import { RecipesComponent } from './componenets/recipes/recipes.component';






@NgModule({
  declarations: [
    AppComponent,

    TopMenuComponent,
    HomeComponent,
    NotFoundComponentComponent,
    LiveMonitorComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component: HomeComponent},
      
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
