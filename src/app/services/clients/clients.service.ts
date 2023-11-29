import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Client } from "src/app/models/client.model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class ClientsService {
	apiUrl = environment.apiUrl + "/client";
	constructor(private http: HttpClient) {}

	//create client properly with error handling and standards
	createClient(client: Client): Observable<Client> {
		const url = `${this.apiUrl}/create`;
		return this.http.post(url, client).pipe(
			catchError((error) => {
				console.error("Error creating client", error);
				return throwError(error);
			})
		);
	}

	//get client properly with error handling and standards
	getClient(id: string): Observable<Client> {
		const url = `${this.apiUrl}/get/${id}`;
		return this.http.get<Client>(url).pipe(
			catchError((error) => {
				console.error("Error getting client", error);
				return throwError(error);
			})
		);
	}

	//update client properly with error handling and standards
	updateClient(client: Client): Observable<Client> {
		const url = `${this.apiUrl}/update`;
		return this.http.put<Client>(url, client).pipe(
			catchError((error) => {
				console.error("Error updating client", error);
				return throwError(error);
			})
		);
	}

	//delete client properly with error handling and standards
	deleteClient(id: string): Observable<Client> {
		const url = `${this.apiUrl}/delete/${id}`;
		return this.http.delete<Client>(url).pipe(
			catchError((error) => {
				console.error("Error deleting client", error);
				return throwError(error);
			})
		);
	}

	//get all clients properly with error handling and standards
	getAllClients(): Observable<Client[]> {
		const url = `${this.apiUrl}`;
		return this.http.get<Client[]>(url).pipe(
			catchError((error) => {
				console.error("Error getting all clients", error);
				return throwError(error);
			})
		);
	}
}
