import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'enumToString',
})
export class EnumToStringPipe implements PipeTransform {
	transform(value: string, ...args: unknown[]): string {
		let str: string = '';
		for (let i = 0; i < value.length; i++) {
			if (value[i].toUpperCase() === value[i]) {
				str += ' ';
			}
			str += value[i];
		}
		return str;
	}
}
