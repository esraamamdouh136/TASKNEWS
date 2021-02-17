import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.scss']
})
export class EditorsPicksComponent implements OnInit {

  constructor(private APIServices : APIServiceService) { }
  EditorsPicks : any = []
  public Startcounter : number = 7  ;
  public Endcounter : number = 9 ;


  ngOnInit(): void {
    this.getData()

  }

  getData(){
    this.APIServices.getAPIS().subscribe(req => this.EditorsPicks = req )
  }

}
