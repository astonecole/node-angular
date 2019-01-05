import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { FlashmsgService } from 'src/app/services/flashmsg.service';
import { ContractType } from 'src/app/models/contract-type.model';
import { contractTypes } from 'src/app/data/jobs';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contractTypes: ContractType[] = contractTypes;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
    private flashmsgService: FlashmsgService
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.form = this.formBuilder.group(new Job());

    this.jobsService
      .find(id)
      .subscribe(
        (job: Job) => {
          this.form = this.formBuilder.group(job);
        }
      );
  }

  onSave() {
    this.jobsService
      .update(this.form.value)
      .subscribe(
        (job: Job) => {
          this.flashmsgService.add(`Le job a été mis à jour`, 'success');
          this.form.reset();
          this.router.navigate(['/jobs']);
        },
        err => {
          console.log('Une erreur est survenue');
        }
      );
  }
}
