import {
    ApplicationRef,
    ComponentFactoryResolver,
    Inject,
    Injectable,
    Injector,
} from '@angular/core';
import {
    ComponentPortal,
    ComponentType,
    DomPortalOutlet,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class DynamicComponentService {
    private bodyPortalOutlet: DomPortalOutlet;
    private componentRef: any;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private applicationRef: ApplicationRef,
    ) {
        this.bodyPortalOutlet = new DomPortalOutlet(
            document.body,
            componentFactoryResolver,
            applicationRef,
            injector,
        );
    }

    public open<T>(component: ComponentType<T>, props: unknown = null): void {
        const componentPortal = new ComponentPortal(component);
        this.componentRef = this.bodyPortalOutlet.attach<T>(componentPortal);

        if (props) {
            Object.assign(this.componentRef.instance, props);
        }
    }

    public close(): void {
        this.bodyPortalOutlet.detach();
    }
}
