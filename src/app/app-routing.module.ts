import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ChildComponent } from "./child/child.component";
import { GrandChildComponent } from "./grand-child/grand-child.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data: {
      breadCrum: "Home"
    },
    children: [
      {
        path: "child",
        component: ChildComponent,
        data: {
          breadCrum: "Child"
        },
        children: [
          {
            path: "grand-child",
            component: GrandChildComponent,
            data: {
              breadCrum: "Grand-Child"
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
