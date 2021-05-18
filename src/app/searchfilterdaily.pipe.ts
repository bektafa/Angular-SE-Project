import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilterdaily',
})
export class SearchfilterdailyPipe implements PipeTransform {
  transform(dailys, searchValue): string {
    if (!dailys || !searchValue) {
      return dailys;
    }
    return dailys.filter((employee) =>
      employee.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
  }
}
