import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {
  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [d.getFullYear(),pad(d.getMonth()+1),pad(d.getDate()) , ].join('-');
  }

  transform(items: any[], radioValue:string, dateRange:string): any[] {
    
    
    if(!items){return [];}
    if(!dateRange){return items};
    
      if(radioValue.length>0){
        if(radioValue=="before"){
         return items.filter( it => { 
          let y = this.convertDate(it.publishedDate);
          let pubdate = Date.parse(y);
         
          let dr = Date.parse(dateRange);
          
          if(pubdate<=dr){
            console.log("Before"+pubdate +""+dr);
            console.log(it.publishedDate);
            return it.publishedDate;
          }
         
          });
        }

        if(radioValue == "after"){
          return items.filter(it => {
            let y = this.convertDate(it.publishedDate);
            let pubdate = Date.parse(y);
            let dr = Date.parse(dateRange);

          if(pubdate>dr){
            console.log(it.publishedDate);
            return it.publishedDate;
          }
        });
        }
      }
    }
    
  }
