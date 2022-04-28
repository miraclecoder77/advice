import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  adminData:any
  // newAdvice
  constructor(private AdminService: AdminService){}
  ngOnInit(): void {
    this.AdminService.getAdvice().subscribe(slip => {
      console.log(slip);
      this.adminData = slip ; 
    } )
  }
  newAdvice() {
    this.AdminService.getAdvice().subscribe(slip => {
      console.log(slip);
      this.adminData = slip ;
    } )
  }
}
