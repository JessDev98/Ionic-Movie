import { Component, inject } from '@angular/core';
import { DbmoviesService } from '../Servicio/dbmovies.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  dbmoviesService = inject(DbmoviesService);

  constructor() { }

  movies!:any;
  detalle!:any;
  query!:any;

  getMovieNowPlaying() {
    this.dbmoviesService.getMovieNowPlaying().subscribe({
      next:(data:any)=>{
        this.movies=data.results;
      },
      error:(error:any)=>{
       console.log('ERROR')
      }
    });
  }

  getDetalle(id:number){
    this.dbmoviesService.getDetalleMovie(id).subscribe({
      next:(data:any)=>{
        this.detalle=data;
        console.log('ERROR')
      },
      error:(error:any)=>{
        console.log('ERROR')
      }
    });
  }

  getSearch(query:any) {
    this.dbmoviesService.getSearchMovie(query.value).subscribe({
      next:(data:any)=>{
        this.query=data.results;
        console.log(this.query);
      },
      error:(error:any)=>{
        console.log('ERROR')
      }
    })
  }


  ngOnInit() {
    this.getMovieNowPlaying();
    
  }
}
