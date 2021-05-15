import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    MenuItemComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class LoginModule {}
