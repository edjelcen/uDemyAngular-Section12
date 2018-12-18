import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../../servers.service';

@Injectable()
export class ServerResolver implements Resolve<IServer> {

    constructor(private service: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServer> | Promise<IServer> | IServer {
        return this.service.getServer(+route.params['id']);
    }
}
