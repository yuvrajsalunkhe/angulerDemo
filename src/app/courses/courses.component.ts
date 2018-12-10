
import { Component, OnInit } from '@angular/core';
import { CoursesServises } from './courses.servises';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title="list of Courses :"
  courses;
  getTitle(){

    return this.title;
}
  constructor(servises:CoursesServises) { 
    this.courses = servises.getCourses();
  }

  ngOnInit() {
  }

}
