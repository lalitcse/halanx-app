import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  topnav = {
    header :{
      main : "Halanx",
      model : 'Demo dashboard for Halanx stores',
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
