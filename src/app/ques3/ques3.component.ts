import { Component, OnInit } from '@angular/core';
import { Number} from '../ques3/number'

@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css']
})
export class Ques3Component implements OnInit {

  Phone = new Number();
  array=[];
  constructor() { }

  ngOnInit(): void {
    this.array.push(this.Phone);
    
  }

  addForm(){
    this.Phone = new Number()
    this.array.push(this.Phone)
  }

  onSubmit(){
    console.log(this.array)
  }

}
