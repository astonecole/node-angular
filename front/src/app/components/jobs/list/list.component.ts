import { Component, OnInit } from '@angular/core';

import { JobsService } from '../../../services/jobs.service';
import { Job } from '../../../models/job.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService
        .all()
        .subscribe(
          data => {
            this.jobs = data;
          }
        );
  }

}
