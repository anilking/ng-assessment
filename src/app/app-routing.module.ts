import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "posts", component: PostListComponent },
  {path: "home", component: AppComponent },
  {path: '',   redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
