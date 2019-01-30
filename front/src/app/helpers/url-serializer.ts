import { UrlTree, DefaultUrlSerializer } from '@angular/router';

export class CleanUrlSerializer extends DefaultUrlSerializer {
    public parse(url: string): UrlTree {
        function cleanUrl(value: string) {
            return value.replace(/\(|\)/g, ''); // for example to delete parenthesis
        }
        return super.parse(cleanUrl(url));
    }
}
