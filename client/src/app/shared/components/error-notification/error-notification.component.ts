import { Component, HostBinding, Input } from '@angular/core';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-error-notification',
    templateUrl: './error-notification.component.html',
    styleUrls: ['./error-notification.component.scss'],
    animations: [
        trigger('notificationError', [
            transition(':enter', [
                style({ left: '-100%' }),
                animate(300, style({ left: '0' })),
            ]),
            transition(':leave', [
                style({ opacity: '1' }),
                animate(200, style({ opacity: '0' })),
            ]),
        ]),
    ],
})
export class ErrorNotificationComponent {
    @HostBinding('@notificationError')
    public trigger: void;

    @Input()
    public errorMsg: string;

    @Input()
    public isVisible: boolean;

    @HostBinding('class._top')
    public isTop: boolean
}
