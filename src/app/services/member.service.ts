import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/member.model';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private api = 'http://127.0.0.1:8000/api/members/';

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.api);
  }
}
