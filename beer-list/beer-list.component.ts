import { Component, OnInit } from '@angular/core';
import {Beer} from './beer';
import { BeerDataService } from '../service/beer-data.service';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls:[ './beer-list.component.css']
})
export class BeerListComponent implements OnInit {
      public titulos: any = {
        name: 'nombre',
        description:'description',
        price:'precio',
        image:'imagen',
        stock: 'stock',
        ofert:'oferta'
      }
      
    public beers: Beer[];



  constructor(private beerDataService : BeerDataService) {

  }

  masbeer(beer) {
    beer.stock++;
   
  }
  menosbeer(beer) {
    if(beer.stock >0){
      beer.stock--;
      beer.name="menos";
    }
  }
  solonumeros(event){
  
    if(event.key < "0"|| event.key > "9"){
      event.preventDefault();
    }
  }
  getClassOferta(beer){
    if(beer.oferta==true){
      return 'red';
    }
  }
  

  ngOnInit() {
    
    this.beerDataService.getBeers().subscribe(response => {this.beers = [];
      for (const key in response){
       const element = response[key];
       this.beers.push(element);}
 
      
      }
    )
    ;
  }

}
