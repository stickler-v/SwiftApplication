import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { SwiftApplicationSharedLibsModule, SwiftApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [SwiftApplicationSharedLibsModule, SwiftApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [SwiftApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiftApplicationSharedModule {}
