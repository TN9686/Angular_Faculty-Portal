import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Course {
  id: number;
  name: string;
  students: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  // Mock Data
  private courses: Course[] = [
    { id: 1, name: 'Angular Core Deep Dive', students: 45, rating: 4.8 },
    { id: 2, name: 'RxJS Mastery', students: 30, rating: 4.9 }
  ];

  private coursesSubject = new BehaviorSubject<Course[]>(this.courses);
  courses$ = this.coursesSubject.asObservable();

  constructor() { }

  addCourse(courseName: string) {
    const newCourse: Course = {
      id: Date.now(),
      name: courseName,
      students: 0,
      rating: 0
    };
    this.courses.push(newCourse);
    this.coursesSubject.next(this.courses);
  }

  deleteCourse(id: number) {
  const currentCourses = this.coursesSubject.value;

  const updatedCourses = currentCourses.filter(course => course.id !== id);
  this.coursesSubject.next(updatedCourses);
}

}
