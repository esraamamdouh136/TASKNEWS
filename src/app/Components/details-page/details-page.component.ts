import { Component, OnInit } from '@angular/core';
import { ObjectDetails } from 'src/app/model/ObjectDetails';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public Datadetails: ObjectDetails[] = [];
  public DataComments = [];
  Comment: FormGroup;
  public Date = new Date();




  constructor(private formBuilder: FormBuilder) {

  }

  get formControls() { return this.Comment.controls; }

  ngOnInit(): void {
    // get data Object
    this.Datadetails.push(JSON.parse(localStorage.getItem('key')))
    // form Builder
    this.Comment = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]

    });
  }

  // Function Submit
  onSubmit() {
    this.DataComments.push(this.Comment.value)
    this.Comment.reset();

  }
}






