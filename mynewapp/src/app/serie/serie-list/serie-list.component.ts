import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';
const imagen = document.getElementById("imagenCard") as HTMLImageElement;
const titulo = document.getElementById("tituloCard") as HTMLHeadingElement;
const descripcion = document.getElementById("cuerpoCard") as HTMLParagraphElement;
const link = document.getElementById("linkCard") as HTMLAnchorElement;
@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{
  series:Array<Serie>=[];
  selectedSerie: any = null;

  constructor(private serieService:SerieService){}

  ngOnInit() {
    this.getSeriesList()
  }

  renderCard(serie :Serie):void{
    imagen.src=serie.poster
    titulo.textContent=serie.name
    descripcion.textContent=serie.description
    link.href=serie.webpage
    link.textContent=serie.webpage
}

  getAverageSeasons():number{
    if (this.series.length==0){
        return 0
    }
    let suma :number=0
    this.series.forEach(s=>{
        suma=suma+s.seasons
    })
    let total:number
    total=suma/this.series.length
    return total
}

  getSeriesList(){
    this.serieService.getSeries().subscribe((series)=>{
      this.series=series;
    })
  }

  onSerieClick(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
