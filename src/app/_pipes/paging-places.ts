import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../_models/place';

@Pipe({
    name: 'placesPaging'
})

export class PlacesPagingPipe implements PipeTransform {
    transform(value: Place[], page: number, pageSize: number): Place[] {
        if (!value) {
            return [];
        }

        let begin = (page - 1) * pageSize,
            end = begin + pageSize;

        return value.slice(begin, end);
    }
}