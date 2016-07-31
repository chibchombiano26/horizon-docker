import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core'

export function RunApplication(horizon: any) {
    bootstrap(AppComponent, [
        provide("horizon", {useValue: horizon})
    ]);  
}
