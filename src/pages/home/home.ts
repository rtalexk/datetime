import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public user: any = {};
	public dateError: boolean = false;
	public submit: boolean = false;
	public datetime: FormGroup;

	constructor(
		public navCtrl: NavController,
		public formBuilder: FormBuilder
	) {
		this.datetime = formBuilder.group({
			birth: ['', Validators.compose([Validators.required])]
		});
	}

	onDatetimeCancel() {
		this.dateError = this.datetime.controls['birth'].invalid;
	}

	sendData() {
		this.submit = true;
		this.dateError = this.datetime.controls['birth'].invalid;

		if (this.datetime.invalid) {
			return;
		}

		// Open new page
	}

}
