import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "rowPipe"
})
export class RowPipe implements PipeTransform {
  transform<filterData>(value: filterData[], perRow: number): filterData[][] {
        let rows: filterData[][] = [];
        for (let i = 0; i < value.length; i += perRow) {
            rows.push(value.slice(i, i + perRow))
        }
        console.log(rows);
        return rows;
    }
}
