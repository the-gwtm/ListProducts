import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  products : string[] = []; 
  isHidden : boolean = true;
  tableHide : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(newValue:string){
    this.products.push(newValue);
    console.log(this.products);
    this.isHidden = false;
  }

  onListClick(){
    this.tableHide = !this.tableHide;
    this.isHidden = true;
  }

  onReset(){
    window.location.reload();
  }

}
