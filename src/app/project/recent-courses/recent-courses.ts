import { Component, Input } from '@angular/core';
import { project_inteface } from '../project.model';
import { AuthService } from '../../auth.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-recent-projects',
  imports: [],
  templateUrl: './recent-courses.html',
  styleUrl: './recent-courses.css'
})
export class RecentProjects {
  user_id : string = ''
  backend_courses: project_inteface[] = []
  selected_courses: project_inteface[] =[]

  constructor(private auth : AuthService, private courseService : CourseService){}

  ngOnInit(){
    this.auth.currentUser.subscribe(user => {
      this.user_id = user? user.user_id : ''

      if (this.user_id){
        this.courseService.findRecentCourses(this.user_id).subscribe({
          next: (courses) => {
          this.backend_courses = courses;
          this.selected_courses = [...courses]
            .sort((a, b) => Number(b.id) - Number(a.id))
            .slice(0, 3);
          console.log("wanted projects:", this.selected_courses);
          }
        })
      }
    })
  }

}
