import { Injectable } from '@angular/core';
import { IGrocery } from './grocery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
 private groceryURL: string ='assets/groceries.json';
  constructor(private http: HttpClient) { }
  getGroceries(): Observable<IGrocery[]> {
    return this.http.get<IGrocery[]>(this.groceryURL);
  }
}
