import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';

import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { RolesAuthChildGuard } from './guards/roles-auth-child.guard';
import { PortfolioEditForm } from './components/portfolio/portfolio-edit-form/portfolio-edit-form.component';
import { HomeComponent } from './components/portfolio/home/home.component';

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
		canActivateChild: [RolesAuthChildGuard],
		children: [
			{
				path: '',
				component: HomeComponent,
				pathMatch: 'full',
			},
			{
				path: 'edit',
				component: PortfolioEditForm,
				canLoad: [AuthGuard],
				canActivate: [AuthGuard],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor() {}
}
