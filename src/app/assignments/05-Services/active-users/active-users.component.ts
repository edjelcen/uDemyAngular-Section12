import { Component, OnInit } from '@angular/core';
import { ActiveInactiveService } from '../activeInactive.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private service: ActiveInactiveService) { }

  getMoveCount() {
    return this.service.counterService.activeToInactiveCounter;
  }
  onSetToInactive(id: number) {
    this.service.setToInactive(id);
    // this.setCount++;
  }

  ngOnInit() {
    this.users = this.service.activeUsers;
  }
}
