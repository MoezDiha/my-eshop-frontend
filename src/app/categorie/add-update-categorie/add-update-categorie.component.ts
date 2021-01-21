import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import Swal from 'sweetalert2'
import { Categorie } from './../../model/categorie'; //Chemin par rapport a la classe AddUpdateCategorieComponent
import { Categorieserviceservice } from './../../services/categorieservice.service';

@Component({
  selector: 'app-add-update-categorie',
  templateUrl: './add-update-categorie.component.html',
  styleUrls: ['./add-update-categorie.component.css'],
  providers: [Categorieserviceservice]
})
export class AddUpdateCategorieComponent implements OnInit {

  categorie: Categorie = {};

  constructor(
    private route: Router,
    private categorieservice: Categorieserviceservice, 
  ) {
    this.categorie = new Categorie();
   }

  ngOnInit(): void {
  }

  saveOrUpdate() {
    if (this.categorie.idCateg !== undefined) {
      this.categorieservice.update(this.categorie).subscribe(result => {

        console.log(result);

        Swal.fire(
          'Bravo!',
          'Categorie ' + this.categorie.libelleCateg + ' modifié avec succès!',
          'success'
        );

        this.gotoCategorieList();

      })
    } else {
      this.categorieservice.create(this.categorie).subscribe(result => {

        console.log(result);

        Swal.fire(
          'Bravo!',
          'Categorie enregistré avec succès!',
          'success'
        );

        this.gotoCategorieList();

      })
    }
  }

  gotoCategorieList() {
    this.route.navigate(['/categorie/all']);
  }

}
