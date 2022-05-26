import { Projects as ProjectInterface } from '../interfaces/projects';

export class Projects implements ProjectInterface {
	descripcion: string;
	id: number;
	imagen: string | null;
	titulo: string;

	constructor(descripcion: string, id: number, imagen: string | null, titulo: string) {
		this.descripcion = descripcion;
		this.id = id;
		this.imagen = imagen;
		this.titulo = titulo;
	}
}
