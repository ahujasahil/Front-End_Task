import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component implements OnInit {

  arrayno=1000
  y: number;
  array: Array<number>= []
  getNum: any;
  showNum: number;

  constructor() { }

  ngOnInit(): void {
    for(var i =1; i<this.arrayno; i++){
      if(i%2 == 0){
        this.y = (i * i)-1;
       // this.array.push(this.y);

      }
      else{
        this.y = (i * i)+1;
        
      }
      this.array.push(this.y);
      
    }
    console.log(this.array)
    
  }

  getData(getForm: NgForm) {
    this.getNum = getForm["number"]
     this.showNum=this.array[this.getNum]
    console.log(this.array[this.getNum])


    

  }
}

