import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterPlaces'
})
export class FilterPlaces implements PipeTransform{
    transform(places:any[],input:string){
        if(input===""){
            return places;
        }
       return places.filter(place=>place.name.toLowerCase().includes(input.toLowerCase()));
    }
}