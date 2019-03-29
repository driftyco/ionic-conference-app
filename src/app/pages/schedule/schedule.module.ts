import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import {ScheduleFilterModule} from '../schedule-filter/schedule-filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    ScheduleFilterModule
  ],
  declarations: [
    SchedulePage,
  ]
})
export class ScheduleModule { }
