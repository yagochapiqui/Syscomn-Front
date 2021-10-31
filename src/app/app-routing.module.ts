import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinanteCreateComponent } from './components/assinante/assinante-create/assinante-create.component';
import { AssinanteDeleteComponent } from './components/assinante/assinante-delete/assinante-delete.component';
import { AssinanteListComponent } from './components/assinante/assinante-list/assinante-list.component';
import { AssinanteUpdateComponent } from './components/assinante/assinante-update/assinante-update.component';
import { EstadoanimalCreateComponent } from './components/estadoanimal/estadoanimal-create/estadoanimal-create.component';
import { EstadoanimalDeleteComponent } from './components/estadoanimal/estadoanimal-delete/estadoanimal-delete.component';
import { EstadoanimalListComponent } from './components/estadoanimal/estadoanimal-list/estadoanimal-list.component';
import { EstadoanimalUpdateComponent } from './components/estadoanimal/estadoanimal-update/estadoanimal-update.component';
import { HomeComponent } from './components/home/home.component';
import { LocalarmazenamentoCreateComponent } from './components/localarmazenamento/localarmazenamento-create/localarmazenamento-create.component';
import { LocalarmazenamentoDeleteComponent } from './components/localarmazenamento/localarmazenamento-delete/localarmazenamento-delete.component';
import { LocalarmazenamentoListComponent } from './components/localarmazenamento/localarmazenamento-list/localarmazenamento-list.component';
import { LocalarmazenamentoUpdateComponent } from './components/localarmazenamento/localarmazenamento-update/localarmazenamento-update.component';
import { MateriaprimaCreateComponent } from './components/materiaprima/materiaprima-create/materiaprima-create.component';
import { MateriaprimaDeleteComponent } from './components/materiaprima/materiaprima-delete/materiaprima-delete.component';
import { MateriaprimaListComponent } from './components/materiaprima/materiaprima-list/materiaprima-list.component';
import { MateriaprimaUpdateComponent } from './components/materiaprima/materiaprima-update/materiaprima-update.component';
import { NavComponent } from './components/nav/nav.component';
import { PropriedadeCreateComponent } from './components/propriedade/propriedade-create/propriedade-create.component';
import { PropriedadeDeleteComponent } from './components/propriedade/propriedade-delete/propriedade-delete.component';
import { PropriedadeListComponent } from './components/propriedade/propriedade-list/propriedade-list.component';
import { PropriedadeUpdateComponent } from './components/propriedade/propriedade-update/propriedade-update.component';
import { RacaCreateComponent } from './components/raca/raca-create/raca-create.component';
import { RacaDeleteComponent } from './components/raca/raca-delete/raca-delete.component';
import { RacaListComponent } from './components/raca/raca-list/raca-list.component';
import { RacaUpdateComponent } from './components/raca/raca-update/raca-update.component';
import { RegimeengordaCreateComponent } from './components/regimeengorda/regimeengorda-create/regimeengorda-create.component';
import { RegimeengordaDeleteComponent } from './components/regimeengorda/regimeengorda-delete/regimeengorda-delete.component';
import { RegimeengordaListComponent } from './components/regimeengorda/regimeengorda-list/regimeengorda-list.component';
import { RegimeengordaUpdateComponent } from './components/regimeengorda/regimeengorda-update/regimeengorda-update.component';
import { SexoanimalCreateComponent } from './components/sexoanimal/sexoanimal-create/sexoanimal-create.component';
import { SexoanimalDeleteComponent } from './components/sexoanimal/sexoanimal-delete/sexoanimal-delete.component';
import { SexoanimalListComponent } from './components/sexoanimal/sexoanimal-list/sexoanimal-list.component';
import { SexoanimalUpdateComponent } from './components/sexoanimal/sexoanimal-update/sexoanimal-update.component';
import { TipofornecedorCreateComponent } from './components/tipofornecedor/tipofornecedor-create/tipofornecedor-create.component';
import { TipofornecedorDeleteComponent } from './components/tipofornecedor/tipofornecedor-delete/tipofornecedor-delete.component';
import { TipofornecedorListComponent } from './components/tipofornecedor/tipofornecedor-list/tipofornecedor-list.component';
import { TipofornecedorUpdateComponent } from './components/tipofornecedor/tipofornecedor-update/tipofornecedor-update.component';
import { TipomorteCreateComponent } from './components/tipomorte/tipomorte-create/tipomorte-create.component';
import { TipomorteDeleteComponent } from './components/tipomorte/tipomorte-delete/tipomorte-delete.component';
import { TipomorteListComponent } from './components/tipomorte/tipomorte-list/tipomorte-list.component';
import { TipomorteUpdadeComponent } from './components/tipomorte/tipomorte-updade/tipomorte-updade.component';

const routes: Routes = [
 {
   path: '', component: NavComponent, children:[
    {  path: 'home', component:  HomeComponent},

    {  path: 'tipomorte', component:  TipomorteListComponent},
    {  path: 'tipomorte/create', component:  TipomorteCreateComponent},
    {  path: 'tipomorte/update/:idTipoMorte', component:  TipomorteUpdadeComponent},
    {  path: 'tipomorte/delete/:idTipoMorte', component:  TipomorteDeleteComponent},

    {  path: 'localarmazenamento', component:  LocalarmazenamentoListComponent},
    {  path: 'localarmazenamento/create', component:  LocalarmazenamentoCreateComponent},
    {  path: 'localarmazenamento/update/:idLocalArmazenamento', component:  LocalarmazenamentoUpdateComponent},
    {  path: 'localarmazenamento/delete/:idLocalArmazenamento', component:  LocalarmazenamentoDeleteComponent},

    {  path: 'estadoanimal', component:  EstadoanimalListComponent},
    {  path: 'estadoanimal/create', component:  EstadoanimalCreateComponent},
    {  path: 'estadoanimal/update/:idEstadoAnimal', component:  EstadoanimalUpdateComponent},
    {  path: 'estadoanimal/delete/:idEstadoAnimal', component:  EstadoanimalDeleteComponent},

    {  path: 'sexoanimal', component:  SexoanimalListComponent},
    {  path: 'sexoanimal/create', component:  SexoanimalCreateComponent},
    {  path: 'sexoanimal/update/:idSexoAnimal', component:  SexoanimalUpdateComponent},
    {  path: 'sexoanimal/delete/:idSexoAnimal', component:  SexoanimalDeleteComponent},

    {  path: 'propriedade', component:  PropriedadeListComponent},
    {  path: 'propriedade/create', component:  PropriedadeCreateComponent},
    {  path: 'propriedade/update/:idPropriedade', component:  PropriedadeUpdateComponent},
    {  path: 'propriedade/delete/:idPropriedade', component:  PropriedadeDeleteComponent},

    {  path: 'materiaprima', component: MateriaprimaListComponent},
    {  path: 'materiaprima/create', component: MateriaprimaCreateComponent},
    {  path: 'materiaprima/update/:idMateriaPrima', component: MateriaprimaUpdateComponent},
    {  path: 'materiaprima/delete/:idMateriaPrima', component: MateriaprimaDeleteComponent},

    {  path: 'assinante', component: AssinanteListComponent},
    {  path: 'assinante/create', component: AssinanteCreateComponent},
    {  path: 'assinante/update/:idAssinante', component: AssinanteUpdateComponent},
    {  path: 'assinante/delete/:idAssinante', component: AssinanteDeleteComponent},

    { path: 'tipofornecedor', component: TipofornecedorListComponent },
    { path: 'tipofornecedor/create', component: TipofornecedorCreateComponent },
    { path: 'tipofornecedor/update/:idTipoFornecedor', component: TipofornecedorUpdateComponent },
    { path: 'tipofornecedor/delete/:idTipoFornecedor', component: TipofornecedorDeleteComponent },
    
    { path: 'raca', component: RacaListComponent },
    { path: 'raca/create', component: RacaCreateComponent },
    { path: 'raca/update/:idRaca', component: RacaUpdateComponent },
    { path: 'raca/delete/:idRaca', component: RacaDeleteComponent },

    { path: 'regimeengorda', component: RegimeengordaListComponent },
    { path: 'regimeengorda/create', component: RegimeengordaCreateComponent },
    { path: 'regimeengorda/update/:idRegimeEngorda', component: RegimeengordaUpdateComponent },
    { path: 'regimeengorda/delete/:idRegimeEngorda', component: RegimeengordaDeleteComponent },
    
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
