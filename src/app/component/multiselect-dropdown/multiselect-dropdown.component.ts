import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Category } from './Category';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit {

  constructor(private postservice:PostService) { }
  data=[];
  users;
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    ngOnInit(){
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
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

}
