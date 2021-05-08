import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorNotificationComponent } from './components/error-notification/error-notification.component';

const COMPONENTS = [ErrorNotificationComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule],
    exports: [...COMPONENTS],
})
export class SharedModule {}
