import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAdminHomeComponent } from './server-admin-home.component';

describe('ServerAdminHomeComponent', () => {
  let component: ServerAdminHomeComponent;
  let fixture: ComponentFixture<ServerAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
