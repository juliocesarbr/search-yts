import { Component } from '@angular/core';
import { YtsService } from '../services/yts.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent  {
	movie:any;
	moviename: string;

	constructor(private _ytsService: YtsService){
		this.movie = false;
	}

	searchMovie(){

		this._ytsService.updateMovie(this.moviename);

		this._ytsService.getMovie().subscribe(movie => {

			/*Imprimmo lo que retorna la petición
			console.log(movie);*/
			this.movie = movie;
		});

	}
}
