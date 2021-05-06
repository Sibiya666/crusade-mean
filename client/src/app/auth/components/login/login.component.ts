import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.required,
        ]),
    });

    private destroy$: Subject<void> = new Subject();

    constructor(private authService: AuthService) {}

    public onSubmit(event: any): void {
        if (!this.form.valid) {
            return;
        }

        this.authService
            .login(this.form.getRawValue())
            .pipe(
                tap(() => this.form.disable()),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.form.enable();
            });
    }

    public ngOnInit(): void {}
    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
