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
import { Produit } from './../../model/produit'; //Chemin par rapport a la classe AddUpdateProduitComponent
import { Categorie } from './../../model/categorie'; //Chemin par rapport a la classe AddUpdateProduitComponent
import { Produitserviceservice } from './../../services/produitservice.service';
import { Categorieserviceservice } from './../../services/categorieservice.service';


@Component({
  selector: 'app-add-update-produit',
  templateUrl: './add-update-produit.component.html',
  styleUrls: ['./add-update-produit.component.css'],
  providers: [Produitserviceservice,
    Categorieserviceservice]

})
export class AddUpdateProduitComponent implements OnInit {

  produit: Produit = { };
  listCategorie: Categorie[];


  constructor(

    private route: Router,
    private categorieservice: Categorieserviceservice, 
    private produitservice: Produitserviceservice) {
      this.produit = new Produit();
    }

  ngOnInit() {

    this.categorieservice.findAll().subscribe(data => {
      this.listCategorie = data;
    });

    
   }

   saveOrUpdate() {
     if (this.produit.idProduit !== undefined) {
      this.produitservice.update(this.produit).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Produit '+this.produit.desigProduit+' modifié avec succès!',
          'success'
        );
  
        this.gotoProduitList();
  
      })
    } else {
      this.produitservice.create(this.produit).subscribe(result => {

        console.log(result);
  
        Swal.fire(
          'Bravo!',
          'Produit enregistré avec succès!',
          'success'
        );
  
        this.gotoProduitList();
  
      })
    }
}


  gotoProduitList() {
    this.route.navigate(['/produit/all']);
  }
}
