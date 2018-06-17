import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
   name:'filter' 
})
export class FilterPipe implements PipeTransform{
transform(items:any[], searchText:string){
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();

    return items.filter((obj:any)=>{
        return obj.name.toLowerCase().includes(searchText);
    })
}
}