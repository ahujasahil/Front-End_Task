import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ques1Component } from './ques1/ques1.component';
import { XComponent } from './ques2/x/x.component';
import { YComponent } from './ques2/y/y.component';
import { Ques3Component } from './ques3/ques3.component';
import { AComponent } from './ques4/a/a.component';

const routes: Routes = [
  { path: '', component: Ques1Component },
  { path: 'Ques2', component: XComponent },
  { path: 'Y', component: YComponent },
  { path: 'Ques3', component: Ques3Component },
  { path: 'Ques4', component: AComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
