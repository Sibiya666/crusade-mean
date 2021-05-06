import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthComponent } from './components/auth/auth.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

const COMPONENTS = [];

@NgModule({
    declarations: [LoginComponent, RegistrationComponent, AuthComponent, MenuComponent, MenuItemComponent],
    imports: [CommonModule, AuthRoutingModule, MatToolbarModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class LoginModule {}
