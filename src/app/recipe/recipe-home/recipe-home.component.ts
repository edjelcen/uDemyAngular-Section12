import { Component, OnInit } from '@angular/core';
import { RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.url);
  }

  ngOnInit() {

  }

}
