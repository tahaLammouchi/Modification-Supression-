import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
produits? : Produit[];

  constructor(private produitService : ProduitService) {
    this.produits = this.produitService.listeProduits();  
  } 

  ngOnInit(): void {

  }
  
  supprimerProduit(prod : Produit)
  {
    let conf = confirm("Etes-vous sur ?")
    if(conf){
    this.produitService.supprimerProduit(prod);
    }
  }


}

