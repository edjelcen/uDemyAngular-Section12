import { Component } from '@angular/core';
import { ActiveInactiveService } from '../activeInactive.service';

@Component({
  selector: 'app-active-inactive',
  templateUrl: './active-inactive.component.html',
  styleUrls: ['./active-inactive.component.css'],
  providers: [ActiveInactiveService]
})
export class ActiveInactiveComponent  {
  activeUsers = this.service.activeUsers;
  inactiveUsers = this.service.inactiveUsers;

  constructor(private service: ActiveInactiveService) { }
}
