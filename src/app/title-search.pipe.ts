import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSearch'
})
export class TitleSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    return items.filter( it => {
     
      if(it.title.toLowerCase().includes(searchText.toLowerCase())){
        console.log(it.title);
        return it.title;
      }
     // return it.title.toLowerCase().includes(searchText.toLowerCase());
    });
   }
}
