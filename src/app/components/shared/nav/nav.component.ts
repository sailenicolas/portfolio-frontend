import { Component } from "@angular/core";
import { AuthService } from "../../../services/auth.service";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.css"],
})
export class NavComponent {
	title: string = "any";
	user: boolean = false;
	constructor(public auth: AuthService) {}
	logout($event: MouseEvent) {
		console.log("aaa");
	}
}
