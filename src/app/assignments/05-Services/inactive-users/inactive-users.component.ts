import { Component, OnInit } from '@angular/core';
import { ActiveInactiveService } from '../activeInactive.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];

  constructor(private service: ActiveInactiveService) { }

  getMoveCount() {
    return this.service.counterService.inactiveToActiveCounter;
  }
  onSetToActive(id: number) {
    this.service.setToActive(id);
  }

  ngOnInit() {
    this.users = this.service.inactiveUsers;
  }
}
