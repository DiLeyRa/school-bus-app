import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { TravelComponent } from './components/travel/travel.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { AgendadoComponent } from './components/agendado/agendado.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'ruta', component: RutaComponent},
  {path: 'agendado', component: AgendadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
