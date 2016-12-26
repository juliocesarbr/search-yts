import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YtsService{
	private moviename:string;
	private client_id = '333';
	private client_secret = '333';

	constructor(private _http: Http){
		console.log('Ats Service Ready');
		this.moviename = 'star';
	}

	getMovie(){
		return this._http.get('https://yts.ag/api/v2/list_movies.json?query_term='+this.moviename)
		.map(res => res.json());
	}

	updateMovie(moviename:string){
		this.moviename = moviename;
	}
}