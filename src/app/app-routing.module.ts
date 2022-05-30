import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { RolesAuthChildGuard } from './guards/roles-auth-child.guard';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormExperiencesComponent } from './components/forms/experiences/form-experiences.component';
import { FormEducationComponent } from './components/forms/education/form-education.component';
import { FormAboutMeComponent } from './components/forms/about-me/form-about-me.component';
import { FormSoftSkillsComponent } from './components/forms/soft-skills/form-soft-skills.component';
import { FormProjectsComponent } from './components/forms/projects/form-projects.component';

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
						path: 'about/:id',
						component: FormAboutMeComponent,
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
					},
					{
						path: 'educations/:id',
						component: FormEducationComponent,
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
					},
					{
						path: 'experiences/:id',
						component: FormExperiencesComponent,
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
					},
					{
						path: 'projects/:id',
						component: FormProjectsComponent,
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
					},
					{
						path: 'softskills/:id',
						component: FormSoftSkillsComponent,
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
					},
				],
			},
			{
				path: 'add',
				canLoad: [AuthGuard],
				canActivate: [AuthGuard],
				children: [
					{
						path: 'educations',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormEducationComponent,
					},
					{
						path: 'experiences',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormExperiencesComponent,
					},
					{
						path: 'projects',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormProjectsComponent,
					},

					{
						path: 'softskills',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormSoftSkillsComponent,
					},
				],
			},
			{
				path: 'delete',
				canLoad: [AuthGuard],
				canActivate: [AuthGuard],
				children: [
					{
						path: 'educations/:id',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormEducationComponent,
					},
					{
						path: 'experiences/:id',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormExperiencesComponent,
					},
					{
						path: 'projects/:id',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormProjectsComponent,
					},

					{
						path: 'softskills/:id',
						canLoad: [AuthGuard],
						canActivate: [AuthGuard],
						component: FormSoftSkillsComponent,
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
