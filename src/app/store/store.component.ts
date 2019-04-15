import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores = [
    {id: 1, name: "NIKE", open: "9 AM to 9 PM", img: "../../assets/n1.png"},
    {id: 2, name: "ADIDAS" , open: "10 AM to 6 PM" ,img: "../../assets/a1.png"},
    {id: 3, name: "PUMA" , open: "11 AM to 4 PM" ,img: "../../assets/p1.png"},
    {id: 4, name: "REEBOK" , open: "8 AM to 10 PM",img: "../../assets/r1.png"},
    {id: 5, name: "VANS" , open: "8:30 AM to 9 PM" , img: "../../assets/v1.png"},  
    {id: 6, name: "UNDER ARMOUR" , open: "8:30 AM to 9 PM",img: "../../assets/u1.png"}, 
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
