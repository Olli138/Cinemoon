import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';


const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatTabsModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatTableModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatMenuModule
]

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule { }
