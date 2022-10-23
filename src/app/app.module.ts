import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { UltimasNoticiasComponent } from './components/ultimas-noticias/ultimas-noticias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PreMenuComponent } from './components/pre-menu/pre-menu.component';
import { ConocenosComponent } from './conocenos/conocenos.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaClienteComponent,
    IndexComponent,
    MenuComponent,
    FooterComponent,
    InformacionComponent,
    UltimasNoticiasComponent,
    CategoriasComponent,
    PreMenuComponent,
    ConocenosComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
