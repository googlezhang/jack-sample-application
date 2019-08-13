import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JackSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JackSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JackSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JackSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JackSampleApplicationSharedModule
    };
  }
}
