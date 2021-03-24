import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Name} from 'src/app/ques3/number';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  data: string | number;
  XData= new Name();
  array=[];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.array.push(this.XData);
  }

  getData(getForm: NgForm){
    console.log(getForm["name"])
    this.data = getForm["name"];

  }

  addForm(){
    this.XData = new Name()
    this.array.push(this.XData)
  }

  navigate(){
    this._router.navigate(['Y']);
  }

}
