import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import {AuthService} from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import{ AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TravelComponent } from './components/travel/travel.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { AgendadoComponent } from './components/agendado/agendado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UbicacionComponent,
    NavbarComponent,
    TravelComponent,
    RutaComponent,
    AgendadoComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     FormsModule,
     AngularFireAuthModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AngularFireStorageModule
   ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
