import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerService } from '../../core/services/trainer.service';
import { CourseMgmtComponent } from '../course-mgmt/course-mgmt.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // REMOVE MatCardModule from here to stop the animation error
  imports: [CommonModule, CourseMgmtComponent], 
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1 style="color: #3f51b5;">Faculty Management Portal</h1>
      
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div style="flex: 1; padding: 20px; border-radius: 8px; background: #e3f2fd; border: 1px solid #bbdefb;">
          <h3>Total Students</h3>
          <h2 style="margin: 0;">120</h2>
        </div>
        <div style="flex: 1; padding: 20px; border-radius: 8px; background: #ffebee; border: 1px solid #ffcdd2;">
          <h3>Active Courses</h3>
          <h2 style="margin: 0;">{{ (courses$ | async)?.length }}</h2>
        </div>
      </div>

      <app-course-mgmt></app-course-mgmt>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  courses$!: Observable<any[]>;
  constructor(private trainerService: TrainerService) {}
  ngOnInit() {
    this.courses$ = this.trainerService.courses$;
  }
}