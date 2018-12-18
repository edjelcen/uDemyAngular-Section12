import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServersService } from '../../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  paramsSubscription: Subscription;

  constructor(private service: ServersService, private route: ActivatedRoute, private router: Router) { }

  private setServer(params: Params) {
    let id: number = +params['id'];
    if (!id) {
      id = 1;
    }
    this.server = this.service.getServer(id);
  }
  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    //   this.setServer(params);
    // });
    // this.route.queryParams.subscribe();
  }

  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
