import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
  @Input() public ParentData;

  constructor() { }

  ngOnInit(): void {
  }

}
