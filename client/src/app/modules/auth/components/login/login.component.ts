import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MIN_LENGTH_OF_EMAIL, MIN_LENGTH_OF_PASSWORD } from '../auth-constant';
import { AuthService } from 'src/app/shared/services';

import { Subject, timer } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [
            Validators.minLength(MIN_LENGTH_OF_EMAIL),
            Validators.maxLength(MIN_LENGTH_OF_PASSWORD),
            Validators.required,
        ]),
    });

    private destroy$: Subject<void> = new Subject();

    constructor(private authService: AuthService, private router: Router) {}

    public onSubmit(): void {
        if (!this.form.valid) {
            return;
        }

        this.form.disable();

        this.authService
            .login(this.form.getRawValue())
            .pipe(
                tap(() => {
                    this.router.navigate(['/overview']);
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();

        timer(1000)
            .pipe(tap(() => this.form.enable()))
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
