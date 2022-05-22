import { TipoDeEmpleo } from '../enums/tipo-de-empleo';

export interface Experiences {
	id: number;
	cargo: string;
	empresa: string;
	tipoDeEmpleo: TipoDeEmpleo;
	imagen: string;
	inicio: string;
	fin: string | null;
	ubicacion: string;
}
