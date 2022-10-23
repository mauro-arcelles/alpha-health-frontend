import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { IndexComponent } from './index/index.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
const routes: Routes = [
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard], canLoad: [AuthGuard] },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: "registraCliente", component: ConsultaClienteComponent },
    ],
    // canActivate: [DashboardGuard],
    // canLoad: [DashboardGuard]
  }
  ,
  {
    path:'conocenos',
    component:ConocenosComponent
  }
  ,
  { path: "**", redirectTo: "auth" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
