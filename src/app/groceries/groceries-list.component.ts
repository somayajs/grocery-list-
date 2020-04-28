import { GroceryService } from './grocery.service';
import { IGrocery } from './grocery';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: "app-groceries",
  templateUrl: "groceries-list.component.html",
  styleUrls: ["groceries-list.component.css"]
  })
export class GroceriesListComponent {
  pageTitle: string = 'Grocery List';
  imageWidth : number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  inputText: string;

  groceries: IGrocery[] = [];
  constructor(private groceryService: GroceryService) {}
  ngOnInit(): void {
    this.groceryService.getGroceries().subscribe(data => this.groceries = data);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
