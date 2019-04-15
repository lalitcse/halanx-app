import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  plot = [
    {id: 1, place: "Hauz Khas", visit: "100", date:"12-4-2019"},
    {id: 2, place: "Red Fort" , visit: "12", date:"4-1-2019" },
    {id: 3, place: "Kingdom of Dreams" , visit: "52" , date:"5-3-2019"},
    {id: 4, place: "Qutab Minar" , visit: "45", date:"15-4-2019"},
    {id: 5, place: "Chandni Chowk" , visit: "75" , date:"22-4-2019"},  
    {id: 6, place: "Rashtrapati Bhawan" , visit: "58", date:"2-4-2019"}, 
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
