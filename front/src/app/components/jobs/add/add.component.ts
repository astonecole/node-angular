import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contractTypes } from '../../../data/jobs';
import { ContractType } from '../../../models/contract-type.model';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';
import { FlashmsgService } from 'src/app/services/flashmsg.service';

@Component({
  selector: 'app-add',
  templateUrl: '../edit/edit.component.html',
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
      title: ['', Validators.required],
      company: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern(/^[a-z\s\-]{2,20}$/i)]],
      zipcode: ['', Validators.pattern(/^[0-9]{4,6}$/)],
      description: '',
      contractType: null,
      startDate: new Date(),
      publishedDate: new Date()
    });
  }

  onSave() {
    this.jobsService
      .add(this.form.value as Job)
      .subscribe(
        (job: Job) => {
          this.flashmsgService.add(`Le job "${this.form.value.title}" ajouté`, 'success');
          this.form.reset();
          this.router.navigate(['/jobs']);
        },
        err => {
          console.log('Une erreur est survenue');
        }
      );
  }
}
