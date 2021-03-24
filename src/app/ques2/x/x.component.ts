import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  data: string | number;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  getData(getForm: NgForm){
    console.log(getForm["name"])
    this.data = getForm["name"];

  }

  navigate(){
    this._router.navigate(['Y']);
  }

}
