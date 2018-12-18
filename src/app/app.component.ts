import { Component } from '@angular/core';
import { ShoppingListService } from './recipe/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  loadedFeature = 'recipe';
  showRecipe = true;
  showDirectives = false;
  showAccounts = false;
  showAssignment05 = false;
  showServerAdmin = false;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onClickMenuParent(evt: Event) {
    evt.preventDefault();
    return false;
  }
}
