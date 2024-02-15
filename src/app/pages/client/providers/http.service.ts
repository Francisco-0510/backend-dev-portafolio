import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class HttpService {
	http: HttpClient;
	URL = '';
	api = '/';
	TOKEN: any;

	constructor(http: HttpClient, URL: string) {
		this.http = http;
		this.URL = URL;
	}

	getToken(): any {
		const pretoken = localStorage.getItem(environment.LOCAL_STORAGE);
		if (pretoken) {
			let token = JSON.parse(pretoken);
			return token.token;
		}
		return null;
	}

	
	get(url?: string, params?: any): Promise<{ total: number, data: any[] }> | Promise<any> {
		
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.getToken()}`
		});

		if (!url) {
			url = '';
		}
		return this.http.get(this.url() + url, {params, headers}).toPromise();
	}

	post(url: string, obj: any): Promise<any> | Promise<{ message: string, data: any }> {

		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.getToken()}`
		});

		return this.http.post(this.url() + url, obj, { headers }).toPromise();
	}

	put(url: string, obj: any): Promise<any> | Promise<{ message: string, data: any }> {
		return this.http.put(this.url() + url, obj).toPromise();
	}

	patch(url: string, body?: any, params?: any): Promise<any> | Promise<{ message: string, data: any }> {
		return this.http.patch(this.url() + url, body, {params}).toPromise();
	}

	delete(url: string, params?: any): Promise<any> | Promise<{ message: string, data: any }> {
		return this.http.delete(this.url() + url, {params}).toPromise();
	}

	set _api(v: string) {
		this.api = v;
	}

	private url(): string {
		// const url = environment.baseUrl + '/' + (this.api ? this.api : '') + this.URL;
		const url = environment.baseUrl + (this.api ? this.api : '') + this.URL;
		return url;
	}

}
