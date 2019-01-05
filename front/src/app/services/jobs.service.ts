import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Job } from '../models/job.model';

const API_BASE_URL = 'https://localhost:3000/api/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private http: HttpClient) { }

  /**
   * Add a new job.
   */
  add(job: Job) {
    return this.http.post(API_BASE_URL, job, {
      withCredentials: true
    });
  }

  /**
   * Find a job by its ID.
   */
  find(id: Number) {
    return this.http.get(`${API_BASE_URL}/${id}`)
      .pipe(map(res => res));
  }

  /**
   * Find all jobs.
   */
  all(): Observable<Job[]> {
    return this.http.get<Job[]>(API_BASE_URL)
      .pipe(
        map(res => res)
      );
  }

  /**
   * Delete a job by its ID.
   */
  delete(job: Job) {
    return this.http.delete(`${API_BASE_URL}/${job.id}`)
      .pipe(
        tap(res => {
          console.log(res);
        })
      );
  }

  /**
   * Update a jobs by its ID.
   */
  update(job: Job) {
    return this.http.put<Job>(`${API_BASE_URL}`, job);
  }
}
