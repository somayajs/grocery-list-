import { Component } from '@angular/core';
@Component({
  selector: "app-groceries",
  templateUrl: "groceries-list.component.html"
  })
export class GroceriesListComponent {
  pageTitle: string = 'Grocery List';
  imageWidth : number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  inputText: string;
  groceries: any[] = [
    {
      "groceryID": 1,
      "groceryName": "Brocolli",
      "groceryCode": "BRC-024",
      "quantity": 2,
      "price": 5.99,
      "gotIt": true,
      "imageUrl": "assets/images/broccoli.png"
    },
    {
      "groceryID": 2,
      "groceryName": "Slice of Cake",
      "groceryCode": "SLC-001",
      "quantity": 6,
      "price": 1.99,
      "gotIt": false,
      "imageUrl": "assets/images/cake-slice.png"
    },
    {
      "groceryID": 3,
      "groceryName": "Watermelon",
      "groceryCode": "WTM-102",
      "quantity": 1,
      "price": 8.99,
      "gotIt": false,
      "imageUrl": "assets/images/watermelon.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
