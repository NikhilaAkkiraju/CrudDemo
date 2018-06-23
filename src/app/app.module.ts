import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostsviewComponent } from './postsview/postsview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostscreateComponent } from './postscreate/postscreate.component';
import { PostsupdateComponent } from './postsupdate/postsupdate.component';
import { PostService } from './services/post.service';


const routes = [
  {path:'',component:PostsviewComponent},
  {path:'view-posts', component:PostsviewComponent},
  {path:'create-post',component:PostscreateComponent},
  {path:'update-post/:postID',component:PostsupdateComponent},
  {path:'404-error', component:PageNotFoundComponent},
  {path:'**', redirectTo:'404-error',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsviewComponent,
    PostscreateComponent,
    PageNotFoundComponent,
    PostsupdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes),
    NgbModule.forRoot()

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
