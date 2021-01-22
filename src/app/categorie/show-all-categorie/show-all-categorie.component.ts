import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

import { Categorie } from './../../model/categorie'; //Chemin par rapport a la classe ShowAllCategorieComponent
import { Categorieserviceservice } from './../../services/categorieservice.service';

@Component({
  selector: 'app-show-all-categorie',
  templateUrl: './show-all-categorie.component.html',
  styleUrls: ['./show-all-categorie.component.css'],
  providers: [Categorieserviceservice]
})
export class ShowAllCategorieComponent implements OnInit {

  listCategories: Categorie[];

  routeData: any;
  links: any;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;

  constructor( private route: Router,
    private categorieservice: Categorieserviceservice,
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
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categorieservice.findAll().subscribe(data => {
      this.listCategories = data;
    });
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }

  transition() {
    this.route.navigate(['/categorie'], {
      queryParams: {
        page: this.page,
        size: this.itemsPerPage,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadAllCategories();
  }

}
