import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // console.log(this.value);
  }
  title = 'Rocker_Gouri';
  value=
    {
      Firstname:"",
      Lastname:""
    }
  formSubmit()
  {
    alert ('submit')
    console.log(this.value)
  }

}
