import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Trailer } from '../core/trailer.models';
import { TrailerService } from '../core/trailer.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.page.html',
  styleUrls: ['./trailers.page.scss'],
})
export class TrailersPage implements OnInit {
  public folder: string;
  public trailers: Trailer[] = [];
  public trailersDuMois: Trailer[] = [];
  private loading: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private trailerService: TrailerService, public loadingController: LoadingController) { }

  ngOnInit() {
    //this.afficherChargement();
    console.log(this.loading);
    
    this.trailerService.getInfos().subscribe(ok =>
      {
        ok.sort((a,b) => {
          //a est inférieur à b selon les critères de tri
          if(a.title < b.title){
            return -1;
            // a est supérieur à b selon les critères de tri
          } else if(a.title > b.title){
            return 1;
          }
          // a doit être égal à b
          return 0;
        })
        this.trailers = ok
        this.trailersDuMois = ok.slice(0, 6)
        console.log(this.loading, "dans la fonction");
        
       // this.cacherChargement()       
      })
  }

  private afficherChargement(){
    this.loadingController.create({
      message: 'Chargement en cours'
    }).then(result => {
      this.loading = result
      this.loading.present()
    });
    
  }

  private cacherChargement(){
    if(!!this.loading){
      this.loading.dismiss().then();
    }

  }

  navigate(film : Trailer) {
    const navExtras: NavigationExtras = {

      state: {
        filmData: film
      }
    }
    this.router.navigate(['/home/trailers/detail'], navExtras);
  }

}
