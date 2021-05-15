import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.LoginModule),
        canActivate: [UnauthGuard],
    },
    {
        path: '',
        loadChildren: () =>
            import('./modules/layout/layout.module').then(
                (m) => m.LayoutModule,
            ),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
