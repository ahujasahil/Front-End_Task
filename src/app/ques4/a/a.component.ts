import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  @Input() public ParentData;
  constructor() { }

  ngOnInit(): void {
  }

}
