import { NgModule } from '@angular/core';

import { JackSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JackSampleApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JackSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JackSampleApplicationSharedCommonModule {}
