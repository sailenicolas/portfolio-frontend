import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const modulesToExport: any[] = [
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	MatInputModule,
	MatSidenavModule,
	MatGridListModule,
	MatProgressSpinnerModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatDialogModule,
];

@NgModule({
	imports: [modulesToExport],
	exports: [modulesToExport],
})
export class MaterialAppModule {}
