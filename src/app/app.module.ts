import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,RouterModule, Routes } from '@angular/router'
import {HttpClientModule} from '@angular/common/http';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { ProduitComponent } from './produit/produit.component';
import { AddUpdateProduitComponent } from './produit/add-update-produit/add-update-produit.component';
import { ShowAllProduitsComponent } from './produit/show-all-produits/show-all-produits.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { Produit } from './model/produit';
import { Produitserviceservice } from './services/produitservice.service';
import { Observable, of } from 'rxjs';
import { CategorieComponent } from './categorie/categorie.component';
import { AddUpdateCategorieComponent } from './categorie/add-update-categorie/add-update-categorie.component';
import { ShowAllCategorieComponent } from './categorie/show-all-categorie/show-all-categorie.component';
import { Categorie } from './model/categorie';
import { Categorieserviceservice } from './services/categorieservice.service';

@Injectable({ providedIn: 'root' })
export class ProduitResolve implements Resolve<Produit> {
    constructor(private produitservice: Produitserviceservice) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produit> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
          return this.produitservice.findOne(id);
        }
        return of(new Produit());
    }
}

@Injectable({providedIn: 'root'})
export class CategorieResolve implements Resolve<Categorie> {
  constructor(private categorieservice: Categorieserviceservice) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Categorie | Observable<Categorie> | Promise<Categorie> {
    const id = route.params['id'] ? route.params['id'] : null;
    if(id) {
      return this.categorieservice.findOne(id);
    }

    return of(new Categorie());
  }
}

const appRoutes: Routes = [

  { 
    path: '',
    component: HomeComponent
  },

  { 
    path: 'produit/new', 
    component: AddUpdateProduitComponent
  },

  {
    path: 'produit/all',
    component: ShowAllProduitsComponent
  },

  { 
    path: 'produit/:id/view',
    component: AddUpdateProduitComponent,
    resolve: {
        produit: ProduitResolve
    }   
  },

  { 
    path: 'produit/:id/edit', 
    component: AddUpdateProduitComponent,
    resolve: {
        produit: ProduitResolve
    }    
  
  },

  { 
    path: 'produit/:id/delete', 
    component: AddUpdateProduitComponent,
    resolve: {
        produit: ProduitResolve
    }   
  
  },

  {
    path: 'categorie/new',
    component: AddUpdateCategorieComponent
  },

  {
    path: 'categorie/all',
    component: ShowAllCategorieComponent
  },

  {
    path: 'categorie/:id/view',
    component: AddUpdateCategorieComponent,
    resolve: {
      produit: CategorieResolve
    }
  },

  {
    path: 'categorie/:id/edit',
    component: AddUpdateCategorieComponent,
    resolve: {
      produit: CategorieResolve
    }

  },

  {
    path: 'categorie/:id/delete',
    component: AddUpdateCategorieComponent,
    resolve: {
      produit: CategorieResolve
    }

  },

  
  { 
    path: '**',
    component: NotfoundComponent
  },

  ];
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    ProduitComponent,
    AddUpdateProduitComponent,
    ShowAllProduitsComponent,
    NotfoundComponent,
    CategorieComponent,
    AddUpdateCategorieComponent,
    ShowAllCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
