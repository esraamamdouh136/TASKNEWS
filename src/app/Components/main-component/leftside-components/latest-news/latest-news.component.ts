import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor(private APIServices : APIServiceService) { }
  public lastNews : any = [];
  public firstNews : number = 0 ;
  public Startcounter : number = 1  ;
  public Endcounter : number = 2 ;


  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.APIServices.getAPIS().subscribe(req => this.lastNews = req )
  }

}
