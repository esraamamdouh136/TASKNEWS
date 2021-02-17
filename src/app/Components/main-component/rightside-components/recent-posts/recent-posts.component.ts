import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  constructor(private APIServices : APIServiceService) { }
  RecentPosts : any = []
  public Startcounter : number = 3  ;
  public Endcounter : number = 5 ;


  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.APIServices.getAPIS().subscribe(req => this.RecentPosts = req )
  }

}
