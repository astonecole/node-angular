import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-delete',
  template: ``,
})
export class DeleteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.jobsService.delete(parseInt(id, 10))
      .subscribe(
        res => {
          this.router.navigate(['/jobs']);
        }
      );
  }

}
