import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

interface Coach {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
}

export interface Course {
  id: number;
  title: string;
  coach: Coach;
  capacity: number;
  users_count?: number;  
  users?: any[];       
}

@Component({
  selector: 'app-project-side-menu',
  imports: [CommonModule],
  templateUrl: './project-side-menu.html',
  styleUrl: './project-side-menu.css'
})


export class ProjectSideMenu implements OnInit {
  courses: Course[] = [];
  loading = false;
  userRole: string = '';
  
  constructor(private http: HttpClient , private auth : AuthService) {
    
  }
  
  ngOnInit() {
    this.loadCourses();
    this.userRole = this.auth.getCurrentUserRole();
    this.userRole="ME"
    console.log("rooole:" + this.userRole)
    
  }

  loadCourses() {
    this.loading = true;
    this.http.get<any[]>('http://localhost:8000/api/courses/')
      .subscribe({
        next: (data) => {
          this.courses = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });

  }

  registerToCourse(courseId: number) {
  const token = this.auth.getToken();

  this.http.post(
    `http://localhost:8000/api/courses/register/${courseId}/`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  ).subscribe({
    next: (res: any) => {
      alert(res);
      this.loadCourses();
    },
    error: err => {
      alert(err.error);
    }
  });
}

register(courseId:number){
  this.http.post(
    `http://localhost:8000/courses/register/${courseId}/`,
    {},
    { headers:{ Authorization:`Bearer ${localStorage.getItem('access')}`}}
  ).subscribe(res=>{
    alert("ثبت نام شد");
  });
}






}
