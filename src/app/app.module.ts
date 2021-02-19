import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { LeftsideComponentsComponent } from './Components/main-component/leftside-components/leftside-components.component';
import { RightsideComponentsComponent } from './Components/main-component/rightside-components/rightside-components.component';
import { RecentPostsComponent } from './Components/main-component/rightside-components/recent-posts/recent-posts.component';
import { MostPopularComponent } from './Components/main-component/rightside-components/most-popular/most-popular.component';
import { GoodNewsComponent } from './Components/main-component/rightside-components/good-news/good-news.component';
import { FollowUsComponent } from './Components/main-component/rightside-components/follow-us/follow-us.component';
import { LatestNewsComponent } from './Components/main-component/leftside-components/latest-news/latest-news.component';
import { EditorsPicksComponent } from './Components/main-component/leftside-components/editors-picks/editors-picks.component';
import { TrendingComponentComponent } from './Components/main-component/trending-component/trending-component.component';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopComponent } from './Components/Shared/scroll-top/scroll-top.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    MainComponentComponent,
    LeftsideComponentsComponent,
    RightsideComponentsComponent,
    RecentPostsComponent,
    MostPopularComponent,
    GoodNewsComponent,
    FollowUsComponent,
    LatestNewsComponent,
    EditorsPicksComponent,
    TrendingComponentComponent,
    DetailsPageComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
