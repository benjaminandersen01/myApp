import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
    public ships: any = []
    public searchTerm: string = "";
    public cachedShip: any[] = [];
  constructor(private http: HttpClient,) { }
 //
  ngOnInit(){
    this.makeNR()
  }
  
  makeNR(){
    this.http.get("https://swapi.dev/api/starships").subscribe( (data:any) => {
    // as their ID field to be used with the /details/ id route
      const shipsWithIds = data.results.map( (ships: any, index: number) => {
        ships.id = index + 1
        return ships
      })
      console.log("Ships with Ids", shipsWithIds);

      console.log(data);
      this.ships = data.results;
    })
  }

searchForAShip(){
  console.log('Searching for ', this.searchTerm);
  //if searchTerm is blank or empty, restore the original list
   if (this.searchTerm === "" || this.searchTerm === null){
     this.ships = this.cachedShip;

     this.cachedShip = null;

     return
   }
  //save a copy of the items array
  this.cachedShip = this.ships;

  //filter out the items from the array that don't match the searchTerm
  this.ships = this.ships.filter((ships: any) =>{
      return ships.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  })
  

}
}
