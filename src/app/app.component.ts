
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
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

  public onAddStylo(addForm: NgForm): void {
    document.getElementById('add-stylo-form')?.click();
    this.styloService.addStylo(addForm.value).subscribe(
      (response: Stylo) => {
        console.log(response);
        this.getStylos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onOpenModal(stylo: any, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', '#addStyloModal');
    }
    if(mode === 'edit') {
      button.setAttribute('data-target', '#updateStyloModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-target', '#deleteStyloModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
