import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-postsupdate',
  templateUrl: './postsupdate.component.html',
  styleUrls: ['./postsupdate.component.css']
})
export class PostsupdateComponent implements OnInit {

  post : any;
  category:string="";
  success:boolean;
  
  constructor(private postservice: PostService, private activatedRouter: ActivatedRoute, private router : Router) {
this.post={};
   }

  ngOnInit() {

      this.activatedRouter.params.subscribe( param => {

          if(param.postID!="") {

            this.postservice.getPostByID(param.postID).subscribe(response=>{
             
              if (response.json().status == 'Success') {
                this.post = response.json().data;
                for(let cat in this.post.category){
                  this.category = this.category + this.post.category[cat]+","
                }
                let len =this.category.length;
                this.category = this.category.substr(0,len-2);

                
               
              }
              else {
                this.router.navigate(['view-posts']);
              }
            },
          error => {
            this.router.navigate(['view-posts'],{queryParams:{success:'false'}});
           
          }
          );

          }
          else{
              this.router.navigate(['view-posts']);
          }
      })


  }
  updatePost(formData){
    
    this.post.category = this.category.toString().split(", ");
    
    this.postservice.updatePost(this.post).subscribe(response=>{
      console.log(response.json());
      this.router.navigate(['view-posts'],{queryParams: {success: 'true'} });
    })

  }

}
