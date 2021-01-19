import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

import { Produit } from './../../model/produit'; //Chemin par rapport a la classe AddUpdateProduitComponent
import { Produitserviceservice } from './../../services/produitservice.service';
import { Categorieserviceservice } from './../../services/categorieservice.service';

@Component({
  selector: 'app-show-all-produits',
  templateUrl: './show-all-produits.component.html',
  styleUrls: ['./show-all-produits.component.css'],
  providers: [Produitserviceservice,
    Categorieserviceservice]
})
export class ShowAllProduitsComponent implements OnInit {

  listProduits: Produit  [];

  routeData: any;
  links: any;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  
  constructor( private route: Router, 
    private produitservice: Produitserviceservice,
    protected activatedRoute: ActivatedRoute) {
      this.itemsPerPage = 20;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data.pagingParams.page;
            this.previousPage = data.pagingParams.page;
            this.reverse = data.pagingParams.ascending;
            this.predicate = data.pagingParams.predicate;
        });
      
    }

  ngOnInit() {
    this.loadAllProduits();
  }

  loadAllProduits() {
    this.produitservice.findAll().subscribe(data => {
      this.listProduits = data;
    });
}

loadPage(page: number) {
    if (page !== this.previousPage) {
        this.previousPage = page;
        this.transition();
    }
}

transition() {
    this.route.navigate(['/produit'], {
        queryParams: {
            page: this.page,
            size: this.itemsPerPage,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
        }
    });
    this.loadAllProduits();
}
 

}
