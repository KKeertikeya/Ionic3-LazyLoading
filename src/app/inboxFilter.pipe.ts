import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class InboxFilter implements PipeTransform{
    transform(value: any, filterString: string, propertyName: string): any {
        
        if (value.length === 0) {
            return value;
        }

        if (filterString.length === 0) {
            return value;
        }

        const result = [];

        for (const item of value) {
            if (item[propertyName] === filterString) {
                result.push(item);
            }
        }

        return result;
    }
}