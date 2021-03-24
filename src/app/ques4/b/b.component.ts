import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  @Input() public ParentData;

  constructor() { }

  ngOnInit(): void {
  }

}
