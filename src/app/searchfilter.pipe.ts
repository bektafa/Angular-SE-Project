import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(employees, searchValue): string {
    if (!employees || !searchValue) {
      return employees;
    }
    return employees.filter((employee) =>
      employee.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
