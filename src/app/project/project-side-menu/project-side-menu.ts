import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Course {
  id: number;
  title: string;
  coach: number;
  capacity: number;
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.loading = true;
    this.http.get<any[]>('http://localhost:8000/api/courses/course_list/')
      .subscribe({
        next: (data) => {
          this.courses = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }
}
