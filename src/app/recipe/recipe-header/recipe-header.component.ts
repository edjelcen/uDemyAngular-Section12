import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-recipe-header]',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css']
})

export class RecipeHeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    // this.featureSelected.emit(feature);
    // if (feature === 'recipes') {
    //   this.router.navigate(['recipes']);
    // } else  {
    //   this.router.navigate(['shopping']);
    // }
  }
}
