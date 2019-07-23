import { Component, OnInit } from '@angular/core';
import { CoursedetailsService } from '../coursedetails.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses=[];
  constructor(private _crs:CoursedetailsService) { }

  ngOnInit() {
    this._crs.getCourseList().subscribe(data=>this.courses=data);
  }

}
