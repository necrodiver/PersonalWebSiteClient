import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterComponent } from './component/master.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'index', component: MasterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }