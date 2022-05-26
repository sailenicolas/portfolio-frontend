import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { RolesAuthChildGuard } from './guards/roles-auth-child.guard';
import { PortfolioEditForm } from './components/portfolio-edit-form/portfolio-edit-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioAddForm } from './components/portfolio-add-form/portfolio-add-form.component';

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
		canLoad: [AuthGuard],
		canActivate: [AuthGuard],
		canActivateChild: [RolesAuthChildGuard],
		pathMatch: 'prefix',
		children: [
			{
				path: '',
				component: PortfolioComponent,
			},

			{
				path: 'edit',
				canLoad: [AuthGuard],
				canActivate: [AuthGuard],
				children: [
					{
						path: ':routeType',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						children: [
							{
								path: '',
								component: PortfolioEditForm,
								canLoad: [AuthGuard],
								canActivate: [AuthGuard],
							},
							{
								path: ':id',
								component: PortfolioEditForm,
								canLoad: [AuthGuard],
								canActivate: [AuthGuard],
							},
						],
					},
				],
			},
			{
				path: 'add',
				canLoad: [AuthGuard],
				canActivate: [AuthGuard],
				children: [
					{
						path: ':routeType',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: PortfolioAddForm,
					},
				],
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
