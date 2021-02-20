import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

  constructor(private APIServices: APIServiceService) { }
  MostPopular: any = []
  public Startcounter: number = 1;
  public Endcounter: number = 5;


  ngOnInit(): void {
    this.getData()

  }
  // get all data
  getData() {
    this.APIServices.getAPIS().subscribe(req => this.MostPopular = req)
  }

  // get all Details
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
