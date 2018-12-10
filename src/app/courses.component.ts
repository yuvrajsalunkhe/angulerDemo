import { CoursesServises } from './courses.servises';
import { Component } from '@angular/core';


@Component({
    selector:'Courses',
    template:`
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CorsesComponent {
    title = "List Of Courses";
    // courses = ['Course1','course2','course3'];
    courses;

    getTitle(){

        return this.title;
    }

    constructor(servise:CoursesServises){
        this.courses = servise.getCourses();
    }
    

}