import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerAdminHomeComponent } from './server-admin/server-admin-home/server-admin-home.component';
import { UsersComponent } from './server-admin/users/users.component';
import { UserComponent } from './server-admin/users/user/user.component';
import { ServersComponent } from './server-admin/servers/servers.component';
import { ServerComponent } from './server-admin/servers/server/server.component';
import { EditServerComponent } from './server-admin/servers/edit-server/edit-server.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './server-admin/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { ServerResolver } from './server-admin/servers/server/server-resolver.service';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './recipe/shopping-list/shopping-list.component';
import { RecipeHomeComponent } from './recipe/recipe-home/recipe-home.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe/recipe.component';


const appRoutes: Routes = [
    // { path: '', component: ServerAdminHomeComponent},
     { path: '', component: RecipeHomeComponent, pathMatch: 'full'},


     { path: 'recipes', component: RecipeComponent
       , children: [
         { path: '', component: RecipeStartComponent, pathMatch: 'full'},
         { path: ':id', component: RecipeDetailComponent }
       ]
     },
    { path: 'shopping', component: ShoppingListComponent},
    // { path: 'users', component: UsersComponent
    //   , children: [
    //     { path: ':id/:name', component: UserComponent },
    //   ]
    // },


    // { path: 'servers', canActivate: [AuthGuard], component: ServersComponent
    { path: 'servers'
      // , canActivate: [AuthGuard]
      , canActivateChild: [AuthGuard]
      , component: ServersComponent
    , children: [
      { path: ':id', component: ServerComponent, resolve: {'server': ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
      ]
    },
    // { path: 'servers/:id', component: ServerComponent },
    // { path: 'servers/:id/edit', component: EditServerComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found'},
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

