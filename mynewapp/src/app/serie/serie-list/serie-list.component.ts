import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{
  series:Array<Serie>=[];

  constructor(){}

  ngOnInit() {
    this.series=this.getSeriesList()
  }

  getSeriesList():Array<Serie>{
    return dataSeries
  }
}
