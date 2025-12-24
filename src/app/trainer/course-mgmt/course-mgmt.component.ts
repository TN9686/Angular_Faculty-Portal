import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../core/services/trainer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-mgmt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-mgmt.component.html',
  styleUrls: ['./course-mgmt.scss'] // Ensure this matches your filename
})
export class CourseMgmtComponent implements OnInit {
  // 1. Define the missing variable to fix the error
  courses$!: Observable<any[]>; 
  newCourseName: string = '';

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    // 2. Link the variable to the service data
    this.courses$ = this.trainerService.courses$;
  }

  addCourse() {
    if (this.newCourseName.trim()) {
      this.trainerService.addCourse(this.newCourseName);
      this.newCourseName = ''; // Clear input after adding
    }
  }

  // 3. Add the delete function
  deleteCourse(id: number) {
    if (confirm('Delete this course?')) {
      this.trainerService.deleteCourse(id);
    }
  }
}