import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class InboxSearch implements PipeTransform{
    transform(value: any, filterString: string, platformName: string, senderName: string, text: string): any {
        
        if (value.length === 0) {
            return value;
        }

        if (filterString.length === 0) {
            return value;
        }

        const result = [];

        for (const item of value) {
            if (item[platformName].toString().toLowerCase().startsWith(filterString.toLowerCase())
            || item[senderName].toString().toLowerCase().startsWith(filterString.toLowerCase())
            || item[text].toLowerCase().toString().includes(filterString.toLowerCase())) {
                result.push(item);
            }
        }

        return result;
    }
}