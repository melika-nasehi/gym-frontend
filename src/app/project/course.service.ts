import { Injectable } from "@angular/core";
import { new_project_interface, project_inteface } from "./project.model";
import { Api } from "../services/api";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})
export class CourseService{

    constructor(private api : Api){}
    coursesUpdated = new Subject<project_inteface>()
    wanted_courses:project_inteface[] = []
    
    addNewCourse(userId: string , entered_course : new_project_interface){

        const new_project_payload = {
            title : entered_course.title ,
            startDate : entered_course.startDate ,
            endDate : entered_course.endDate ,
            users : [userId]
        }

        this.api.addNewCourse(new_project_payload).subscribe({
            next : (new_course) => {
                console.log("project saved in backend :" , new_course)
                this.coursesUpdated.next(new_course)
            },
            error: (err)=> console.log("error saving project in backend")
        })

    }

    findRecentCourses(user_id:string){
        return this.api.getCourses(user_id)
    }


}