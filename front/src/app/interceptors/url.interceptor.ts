import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, ɵHttpInterceptingHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_URL = new InjectionToken<string>('apiUrl');

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

    constructor(@Inject(API_URL) private apiUrl: string) { }

    /**
     * {@inheritdoc}
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(this.prepareUrl(request.url));

        request = request.clone({ url: this.prepareUrl(request.url) });
        return next.handle(request);
    }

    private isAbsoluteUrl(url: string): boolean {
        return (/^https?:\/\//i).test(url);
    }

    private prepareUrl(url: string): string {
        if (!this.isAbsoluteUrl(url)) {
            url = `${this.apiUrl}/${url}`;
        }
        return url.replace(/([^:]\/)\/+/g, '$1');
    }
}
