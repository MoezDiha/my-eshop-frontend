import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

 

@Injectable({ providedIn: 'root' })
export class Categorieserviceservice {
    
    
     private resourceUrl: string;

    constructor(protected http: HttpClient) {

        this.resourceUrl =  'https://e-schop-tn-spring-rest.herokuapp.com/api/categories';
    }

    create(categorie: Categorie) {
        return this.http.post<Categorie>(this.resourceUrl, categorie);

    }

    update(categorie: Categorie)  {
        return this.http.put<Categorie>(this.resourceUrl, categorie);
    }

    findOne(id: number)  {
        return this.http.get<Categorie>(`${this.resourceUrl}/${id}`);
    }

    public findAll(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(this.resourceUrl);
      }


    delete(id: number)  {
        return this.http.delete<Categorie>(`${this.resourceUrl}/${id}`);
    }
}
