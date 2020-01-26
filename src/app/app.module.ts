import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ChildComponent } from "./child/child.component";
import { GrandChildComponent } from "./grand-child/grand-child.component";
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChildComponent,
    GrandChildComponent,
    BreadCrumbsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
