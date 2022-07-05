import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { DatosComponent } from './components/client/datos/datos.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DatosComponent,
		FileUploadComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
