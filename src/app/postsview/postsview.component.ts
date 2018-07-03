import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-postsview',
  templateUrl: './postsview.component.html',
  styleUrls: ['./postsview.component.css']
})
export class PostsviewComponent implements OnInit {
  posts : Array<Object> = [];
  category;
  modalRef: any;
  deletePostID : string;
  message:string="";
  error:string="";
  p:number=1;
  pageDetails={"pageNo":this.p,"itemsPerPage":2 };  
  total:number;
  constructor(private postService:PostService,private router:Router,private modalService: NgbModal,private route:ActivatedRoute) { }
  pageChanged(num){
    this.p=num;
    this.pageDetails.pageNo=num;
    this.postService.getPost(this.pageDetails).subscribe(response=>{
      this.posts= response.json().data.paginatedData;
      this.total=response.json().data.totalCount;
      console.log(response.json().data.paginatedData);
    //  this.category = this.posts[0].category;
     //console.log(this.category);
   });

  }
  ngOnInit() {
    this.deletePostID ="";
    this.postService.getPost(this.pageDetails).subscribe(response=>{
       this.posts= response.json().data.paginatedData;
       this.total=response.json().data.totalCount;
       console.log(response.json().data.paginatedData);
     //  this.category = this.posts[0].category;
      //console.log(this.category);
    });
    this.route.queryParams.subscribe(params=>{
      if(params.created == 'true'){
        this.message="Post is successfully created";
        setTimeout(()=>{this.message="";},3000);
      }
      if(params.success=='true'){
        this.message="Post is successfully updated";
        setTimeout(()=>{this.message="";},3000);
      }
      else if(params.success=='false'){
          this.error="Post doesn't exist!";
          setTimeout(()=>{this.error="";},3000);
      }
      else{}
    });
  
  }

  update(postID : string){
    this.router.navigate(['update-post/',postID]);
   // this.router.navigate(['create-post']);
  }


  confirmDeletePost(content, postID) {
    this.modalRef = this.modalService.open(content);
    this.deletePostID = postID;
  }

  deletePost() {
    this.postService.deletePost(this.deletePostID).subscribe(response=>{
      this.modalRef.dismiss();
      this.postService.getPost(this.pageDetails).subscribe(response=>{
        

        this.message="Post is successfully deleted";
        setTimeout(()=>{this.message="";},3000);
        this.posts= response.json().data;
        
     });

   },
   error => {
     console.log('Not deleted');
   }
  );


  }

  close() {
    this.modalRef.close();
  }
  dismiss() {
   
    this.modalRef.dismiss();
  }

}
