import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortPlacesBy'
})
export class SortPlacesBy implements PipeTransform {
    transform(places: any[], sortBy: string) {
        if (sortBy) {
            return places.sort((a, b) => {
                return a[sortBy].toString().localeCompare(b[sortBy].toString());
            });
        } else {
            return places.sort();
        }
    }
}