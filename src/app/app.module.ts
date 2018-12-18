import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeHeaderComponent } from './recipe/recipe-header/recipe-header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './recipe/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipe/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DirectiveSampleComponent } from './directives/directive-sample/directive-sample.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { AccountsService } from './accounts/accounts.service';
import { LoggingService } from './shared/services/logging.service';
import { ActiveUsersComponent } from './assignments/05-Services/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/05-Services/inactive-users/inactive-users.component';
import { ActiveInactiveComponent } from './assignments/05-Services/active-inactive/active-inactive.component';
import { CounterService } from './assignments/05-Services/counter.service';
import { ServerAdminComponent } from './server-admin/server-admin.component';
import { ServerAdminHomeComponent } from './server-admin/server-admin-home/server-admin-home.component';
import { ServersComponent } from './server-admin/servers/servers.component';
import { ServerComponent } from './server-admin/servers/server/server.component';
import { EditServerComponent } from './server-admin/servers/edit-server/edit-server.component';
import { UsersComponent } from './server-admin/users/users.component';
import { UserComponent } from './server-admin/users/user/user.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './server-admin/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { ServersService } from './server-admin/servers.service';
import { ServerResolver } from './server-admin/servers/server/server-resolver.service';
import { RecipeHomeComponent } from './recipe/recipe-home/recipe-home.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeHeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DirectiveSampleComponent,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    AccountsComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveInactiveComponent,
    ServerAdminComponent,
    ServerAdminHomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeHomeComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountsService, LoggingService, CounterService, AuthGuard, AuthService, CanDeactivateGuard
    , ServersService , ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
