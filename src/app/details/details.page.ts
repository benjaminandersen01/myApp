import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getStarWarsDetails();
  }
  getStarWarsDetails(){
    const starWarsId = +this.route.snapshot.paramMap.get('id');

    this.httpClient.get(`https://swapi.dev/api/starships/${starWarsId}`).subscribe((ships: any) =>{
      console.log('Ship', ships)
    })
  }
}
