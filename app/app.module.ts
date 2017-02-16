import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app.component';
import { MasterComponent } from './component/master.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        MasterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }