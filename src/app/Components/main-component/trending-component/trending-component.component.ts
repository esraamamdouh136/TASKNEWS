import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.scss']
})
export class TrendingComponentComponent implements OnInit {

  constructor(private APIServices: APIServiceService) { }
  Trending: any = []
  public Startcounter: number = 6;
  public Endcounter: number = 9;


  ngOnInit(): void {
    this.getData()

  }
  // get all data

  getData() {
    this.APIServices.getAPIS().subscribe(req => this.Trending = req)
  }
  // get data Details

  getDataDetails(id: number, title: string, Description: string, urlToImage: string, author: string, publishedAt: Date,
  ) {
    let DataOfNews = {
      id: id,
      title: title,
      description: Description,
      urlToImage: urlToImage,
      author: author,
      publishedAt: publishedAt,
    }
    try {
      localStorage.setItem('key', JSON.stringify(DataOfNews));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }

  }

}