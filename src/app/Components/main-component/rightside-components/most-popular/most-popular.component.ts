import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

  constructor(private APIServices : APIServiceService) { }
  MostPopular : any = []
  public Startcounter : number = 1 ;
  public Endcounter : number = 5 ;


  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.APIServices.getAPIS().subscribe(req => this.MostPopular = req )
  }

}
