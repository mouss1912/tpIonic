import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trailer } from '../core/trailer.models';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.page.html',
  styleUrls: ['./trailer.page.scss'],
})
export class TrailerPage implements OnInit {
  public id: string;
  public trailer: Trailer = {
    title : '',
    actors :[],
    poster : '',
    directors : '',
    rating :'',
    genre: [],
    releasedate : null,
    moviesite: ''

  };

  constructor(private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.router.getCurrentNavigation().extras.state);
    const trailerData = !! this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state.filmData : null;
    if(!!trailerData){

   this.trailer = trailerData;
    } else{
      this.router.navigate(['/home/trailers'])
    }
    //this.trailer = this.router.getCurrentNavigation().extras.state.filmData;

  }
  afficheLien(){
    console.log(this.trailer.moviesite);
  }
  //TO DO METTRE EN PLACE IN APPBROWSER
  //https://ionicframework.com/docs/native/in-app-browser

}
