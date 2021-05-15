import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services';


import { MIN_LENGTH_OF_EMAIL, MIN_LENGTH_OF_PASSWORD } from '../auth-constant';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnDestroy {
    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [
            Validators.minLength(MIN_LENGTH_OF_EMAIL),
            Validators.maxLength(MIN_LENGTH_OF_PASSWORD),
            Validators.required,
        ]),
    });

    private destroy$: Subject<void> = new Subject<void>();

    constructor(private authServie: AuthService, private router: Router) {}

    public onSubmit(): void {
        if (!this.form.valid) {
            return;
        }

        this.form.disable();

        this.authServie
            .registration(this.form.getRawValue())
            .pipe(
                tap(() => {
                    this.router.navigate(['/login'], {
                        queryParams: {
                            registration: true,
                        },
                    });
                    this.form.enable();
                }),
                takeUntil(this.destroy$),
            )
            .subscribe();

        timer(1000)
            .pipe(tap(() => this.form.enable()))
            .subscribe();
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
