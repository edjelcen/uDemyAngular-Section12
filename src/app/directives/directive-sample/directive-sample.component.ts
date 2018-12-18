import { Component, OnInit } from '@angular/core';
import { BasicHighlightDirective } from '../basic-highlight.directive';
import { BetterHighlightDirective } from '../better-highlight.directive';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.css']
})
export class DirectiveSampleComponent implements OnInit {
  onlyOdd = false;
  evenNumbers = [2, 4];
  oddNumbers = [1, 3, 5];
  value = 10;

  constructor() { }

  ngOnInit() {
  }

}
