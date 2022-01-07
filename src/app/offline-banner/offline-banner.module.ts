import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineBannerComponent } from './offline-banner.component';


@NgModule({
  declarations: [OfflineBannerComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    OfflineBannerComponent
  ]
})
export class OfflineBannerModule { }
