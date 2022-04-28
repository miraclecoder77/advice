import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  getAdvice() {
   return this.http.get('https://api.adviceslip.com/advice')
  }
  constructor(private http:HttpClient) { }
}
