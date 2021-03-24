import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques1Component } from './ques1/ques1.component';
import { FormsModule }    from '@angular/forms';
import { Ques3Component } from './ques3/ques3.component';
import { AComponent } from './ques4/a/a.component';
import { BComponent } from './ques4/b/b.component';
import { CComponent } from './ques4/c/c.component';
import { DComponent } from './ques4/d/d.component';
import { EComponent } from './ques4/e/e.component';
import { XComponent } from './ques2/x/x.component';
import { YComponent } from './ques2/y/y.component';

@NgModule({
  declarations: [
    AppComponent,
    Ques1Component,
    Ques3Component,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    XComponent,
    YComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
