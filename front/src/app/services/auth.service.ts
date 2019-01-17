import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';

const LOCAL_STORAGE_USER_KEY = 'currentItem';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User> = null;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<User> {
        const data = {
            email: email,
            password: password
        };

        return this.http.post<User>('/authentication', data)
            .pipe(tap(user => {
                console.log(user);
            }))
            .pipe(map(user => {
                // login successful if there's a jwt token in the response.
                if (user) {
                    // store user details and jwt token in local storage to
                    // keep user logged in between pages refresh.
                    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout(): void {
        // remove user form local storage to log user out.
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        this.currentUserSubject.next(null);
    }
}
