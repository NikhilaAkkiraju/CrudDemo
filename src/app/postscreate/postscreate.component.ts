import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Category } from '../component/multiselect-dropdown/Category';

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
  data=[];
  users;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private postservice:PostService,private route:Router) { }

 /* ngOnInit() {
    
  }
*/

  ngOnInit(){
    this.user={};
    this.postservice.getCategories().subscribe(response =>{
    
      this.data = response.json().data;
    
      
     for(let i=0;i<this.data.length;i++){
       this.users=new Category((i+1).toString(),this.data[i].title);
       this.dropdownList.push(this.users);
      }

    });
      this.selectedItems = [];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Catergories",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };            
  }
  

  onItemSelect(item:any){
      //console.log(item);
     // console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      //console.log(item);
     // console.log(this.selectedItems);
  }
  onSelectAll(items: any){
     // console.log(items);
     
  }
  onDeSelectAll(items: any){
   //   console.log(items);
  }

  createPost(form){
    let catArr = [];
  
   for(let i=0;i<this.selectedItems.length;i++){
    catArr.push(this.selectedItems[i].itemName);
   }
   
    this.user.title = form.value.title;
    this.user.description = form.value.description;
    this.user.isActive = form.value.active;
    this.user.author = form.value.author;
    this.user.category = catArr;
    
    this.postservice.createPost(this.user).subscribe(response=>{
        this.route.navigate(['view-posts'],{ queryParams: { created: 'true' } });
    });
    
    this.user="";
  }
}
