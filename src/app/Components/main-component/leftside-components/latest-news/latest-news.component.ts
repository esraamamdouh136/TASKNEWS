import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
 
  constructor(
    private APIServices: APIServiceService,
  

  ) { }
  public lastNews: any = [];
  public firstNews: number = 0;
  public Startcounter: number = 1;
  public Endcounter: number = 2;


  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.APIServices.getAPIS().subscribe(req => this.lastNews = req)
  }

 
  getDataDetails( id : number ,title:string, Description: string , urlToImage:string  , author:string , publishedAt: Date,
    ) {
    let DataOfNews = {
      id : id,
      title: title,
      description: Description,
      urlToImage: urlToImage,
      author: author,
      publishedAt:publishedAt ,
    }
     try {
          localStorage.setItem('key', JSON.stringify(DataOfNews));
        } catch (e) {
          console.error('Error saving to localStorage', e);
        }

  }

}



