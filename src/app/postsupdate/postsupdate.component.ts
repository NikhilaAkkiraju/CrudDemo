import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Category } from '../component/multiselect-dropdown/Category';

@Component({
  selector: 'app-postsupdate',
  templateUrl: './postsupdate.component.html',
  styleUrls: ['./postsupdate.component.css']
})
export class PostsupdateComponent implements OnInit {

  post : any;
  category:string="";
  success:boolean;
  data=[];
  users;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  caterror:boolean=false;
  
  constructor(private postservice: PostService, private activatedRouter: ActivatedRoute, private router : Router) {
this.post={};
   }

  ngOnInit() {

      this.activatedRouter.params.subscribe( param => {

          if(param.postID!="") {


            this.postservice.getPostByID(param.postID).subscribe(response=>{
             
              if (response.json().status == 'Success') {
                this.post = response.json().data;
               /* for(let cat in this.post.category){
                  this.category = this.category + this.post.category[cat]+",";

                }*/

              /*  let len =this.category.length;
                this.category = this.category.substr(0,len-2);*/
                this.post.category.forEach((item, index)=>{
                 
                  this.users = new Category(index+1, item);
                  this.selectedItems.push(this.users) ;
                });


                this.dropdownSettings = { 
                  ingleSelection: false, 
                  text:"Select Catergories",
                  selectAllText:'Select All',
                  unSelectAllText:'UnSelect All',
                  enableSearchFilter: true,
                  classes:"myclass custom-class"
                }; }
              else {
                this.router.navigate(['view-posts']);
              }
            },
          error => {
            this.router.navigate(['view-posts'],{queryParams:{success:'false'}});
           
          }
          );

          this.postservice.getCategories().subscribe(res=>{
            this.data = res.json().data;
            this.data.forEach((item,index)=>{
              this.users=new Category(index+1,item.title);
              console.log(this.users);
              this.dropdownList.push(this.users);
            });
            
          });

          }
          else{
              this.router.navigate(['view-posts']);
          }
      })
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
    if(this.selectedItems.length==0){
      this.caterror = true;
  }
  else{
    this.caterror = false;
  }
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
    if(this.selectedItems.length==0){
        this.caterror = true;
    }
    else{
      this.caterror = false;
    }
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}


  updatePost(formData){
    console.log("update form"+this.selectedItems);
    this.post.category=[];
    
    this.selectedItems.forEach((item,index)=>{
      this.post.category.push(item.itemName);
    });
   // this.post.category = this.selectedItems;
    
    this.postservice.updatePost(this.post).subscribe(response=>{
      console.log(response.json());
      this.router.navigate(['view-posts'],{queryParams: {success: 'true'} });
    });

  }

}
