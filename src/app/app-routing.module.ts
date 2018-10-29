import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent}
  {path: 'ubicacion', component: UbicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
