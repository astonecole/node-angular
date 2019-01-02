import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/job.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  job: Job = {} as Job;

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.jobsService
        .find(parseInt(id))
        .subscribe(
          (job: Job) => {
            this.job = job;
          }
        );
  }

}
