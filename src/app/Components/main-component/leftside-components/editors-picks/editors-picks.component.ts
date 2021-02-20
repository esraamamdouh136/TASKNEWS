import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.scss']
})
export class EditorsPicksComponent implements OnInit {

  constructor(private APIServices: APIServiceService) { }
  EditorsPicks: any = []
  public Startcounter: number = 7;
  public Endcounter: number = 9;


  ngOnInit(): void {
    this.getData()

  }
  // get all data
  getData() {
    this.APIServices.getAPIS().subscribe(req => this.EditorsPicks = req)
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
