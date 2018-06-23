import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postscreate',
  templateUrl: './postscreate.component.html',
  styleUrls: ['./postscreate.component.css']
})
export class PostscreateComponent implements OnInit {
  success:boolean=false;
  user:any;
  validform:boolean=false;
  category:string;
  catarr=[];
  constructor(private postservice:PostService,private route:Router) { }

  ngOnInit() {
    this.user={};
  }

  createPost(form){
    
    //converting category from string to array
    this.category = form.value.category;
    this.catarr = this.category.split(",");
    
    this.user.title = form.value.title;
    this.user.description = form.value.description;
    this.user.isActive = form.value.active;
    this.user.author = form.value.author;
    this.user.category = this.catarr;
    
    this.postservice.createPost(this.user).subscribe(response=>{
        this.route.navigate(['view-posts'],{ queryParams: { created: 'true' } });
    });
    
    this.user="";
  }
}
