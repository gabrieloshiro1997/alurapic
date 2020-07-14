import { NgModule } from '@angular/core';
import { SingInComponent } from './signin/singin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ 
		SingInComponent
	],
	imports: [
		ReactiveFormsModule,
		CommonModule,
		VMessageModule,
		RouterModule
	]
})
export class HomeModule {

}