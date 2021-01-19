import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

 

@Injectable()

export class Produitserviceservice {
    
    
     private resourceUrl: string;

    constructor(protected http: HttpClient) {

        this.resourceUrl =  'https://e-schop-tn-spring-rest.herokuapp.com/api/produits';
        
    }

    create(produit: Produit) {
        return this.http.post<Produit>(this.resourceUrl, produit);

    }

    update(produit: Produit)  {
        return this.http.put<Produit>(this.resourceUrl, produit);
    }

    findOne(id: number) : Observable<Produit> {
        return this.http.get<Produit>(`${this.resourceUrl}/${id}`);
    }

    public findAll(): Observable<Produit[]> {
        return this.http.get<Produit[]>(this.resourceUrl);
      }


    delete(id: number)  {
        return this.http.delete<Produit>(`${this.resourceUrl}/${id}`);
    }
}
