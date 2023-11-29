import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Client } from "src/app/models/client.model";
import { ClientsService } from "src/app/services/clients/clients.service";

@Component({
	selector: "register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
	client: Client = {};
	constructor(
		private clientService: ClientsService,
		private toaster: ToastrService
	) {}

	ngOnInit(): void {}

	registerClient() {
		this.clientService.createClient(this.client).subscribe(
			(client) => {
				console.log(client);
			},

			(error) => {
				this.toaster.error("Error creating client", "Error");
			}
		);
	}
}
