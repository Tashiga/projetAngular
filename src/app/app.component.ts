
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stylo } from './stylo';
import { StyloService } from './stylo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public stylos: Stylo[]  = new Array();

  constructor(private styloService: StyloService) { }

  ngOnInit(): void {
      this.getStylos();
  }

  public getStylos(): void {
    this.styloService.getStylos().subscribe (
      (response: Stylo[]) => {
        this.stylos = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
