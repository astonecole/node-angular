import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Job } from '../models/job.model';

const API_PATH = '/api/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  /**
   * Add a new job.
   */
  add(job: Job): Observable<Job> {
    return this.http.post<Job>(API_PATH, job, {
      withCredentials: true
    });
  }

  /**
   * Find a job by its ID.
   */
  find(id: Number): Observable<Job> {
    return this.http.get<Job>(`${API_PATH}/${id}`)
      .pipe(map(res => res));
  }

  /**
   * Find all jobs.
   */
  all(): Observable<Job[]> {
    return this.http.get<Job[]>(API_PATH)
      .pipe(
        map(res => res)
      );
  }

  /**
   * Delete a job by its ID.
   */
  delete(job: Job): Observable<any> {
    return this.http.delete<any>(`${API_PATH}/${job.id}`)
      .pipe(
        tap(res => {
          console.log(res);
        })
      );
  }

  /**
   * Update a jobs by its ID.
   */
  update(job: Job): Observable<any> {
    return this.http.put<Job>(`${API_PATH}`, job);
  }
}
