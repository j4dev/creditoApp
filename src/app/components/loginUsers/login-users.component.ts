import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
	selector: 'app-loginClient',
	templateUrl: './login-users.component.html',
	styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
	form: FormGroup;
	loading = false;

	constructor(
		private fb: FormBuilder,
		private authservice: AuthService,
		private _snackBar: MatSnackBar,
		private router: Router
	) {
		this.form = this.fb.group({
			correo: ['', Validators.required],
			contrasenia: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		if (this.authservice.isAuthenticatedUser()) {
			this.router.navigate(['/users/solicitudes']);
		}
	}

	ingresar(form: any) {
		const correo = form.correo;
		const contrasenia = form.contrasenia;
		let correoCoincide = false;
		let contraseniaCoincide = false;

		this.authservice.getUser(correo).subscribe((data) => {
			if (data.length !== 0) {
				correoCoincide = true;
				if (data[0].contrasenia === contrasenia) {
					contraseniaCoincide = true;
					const user = {
						id: data[0].id,
						nombres: data[0].nombres,
						apellidos: data[0].apellidos,
						correo: data[0].correo
					};
					localStorage.setItem('user', JSON.stringify(user));
					this.router.navigate(['/users/solicitudes']);
				}
			}
			if (!(correoCoincide && contraseniaCoincide)) {
				alert('Credenciales inválidas');
			}
		});
	}
}