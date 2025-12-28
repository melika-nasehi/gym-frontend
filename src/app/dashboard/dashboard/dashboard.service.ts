import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MemberDashboardData {
  total_bookings: number;
  wallet_balance: number;
  recent_payments: {
    amount: number;
    status: string;
    created_at: string;
  }[];
  upcoming_sessions: {
    course: string;
    date: string;
    start_time: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getMemberDashboard(memberId: number): Observable<MemberDashboardData> {
    return this.http.get<MemberDashboardData>(
      `${this.apiUrl}/dashboard/member/?member_id=${memberId}`
    );
  }
}
