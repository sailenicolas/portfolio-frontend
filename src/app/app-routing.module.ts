import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';

import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'login',
		component: LoginComponent,
		canLoad: [UnauthGuard],
		canActivate: [UnauthGuard],
	},
	{
		path: 'portfolio',
		component: PortfolioComponent,
		canLoad: [AuthGuard],
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor() {}
}
