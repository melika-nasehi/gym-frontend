import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  templateUrl: './members.html'
})
export class MembersComponent implements OnInit {
  members: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMembers().subscribe((res: any) => {
      this.members = res;
    });
  }
}
