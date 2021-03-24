import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  @Input() data:string;
  Ydata: string | number;
  submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getData(getForm: NgForm){
    this.submitted=true
    console.log(getForm["name"])
    this.Ydata = getForm["name"];
    console.log(this.data)

  }

}
