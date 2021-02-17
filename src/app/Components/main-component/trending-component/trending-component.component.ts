import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.scss']
})
export class TrendingComponentComponent implements OnInit {

  constructor(private APIServices : APIServiceService) { }
  Trending : any = []
  public Startcounter : number = 6  ;
  public Endcounter : number = 9 ;


  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.APIServices.getAPIS().subscribe(req => this.Trending = req )
  }

}