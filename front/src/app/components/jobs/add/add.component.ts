import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { contractTypes } from '../../../data/jobs';
import { ContractType } from '../../../models/contract-type.model';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';
import { FlashmsgService } from 'src/app/services/flashmsg.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contractTypes: ContractType[] = contractTypes;
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
    private flashmsgService: FlashmsgService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      company: '',
      city: '',
      zipcode: '',
      description: '',
      contractType: '',
      startDate: new Date(),
      publishedDate: new Date()
    });
  }

  addJob() {
    this.jobsService
      .add(this.form.value)
      .subscribe(
        (job: Job) => {
          this.flashmsgService.add('Job ajouté', 'success');
          this.form.reset();
          this.router.navigate(['/jobs']);
        },
        (err) => {
          console.log('Une erreur est survenue');
        }
      );
  }
}
