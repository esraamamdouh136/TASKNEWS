import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public Datadetails: News[] = [];
  public DataComments = [];
  Comment: FormGroup;
  public Date = new Date();




  constructor(private formBuilder: FormBuilder) {

  }

  get formControls() { return this.Comment.controls; }

  ngOnInit(): void {
    this.Datadetails.push(JSON.parse(localStorage.getItem('key')))

    this.Comment = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]

    });






  }
  onSubmit() {
    this.DataComments.push(this.Comment.value)
    this.Comment.reset();

  }
}






