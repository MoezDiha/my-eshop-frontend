import { Categorie } from "./categorie";

export interface Produit {
    idProduit?: number;
    desigProduit?: string;
    marqueProduit?: string;
    modeleProduit?: string;
    configProduit?: string;
    puProduit?: number;
    qteProduit?: number;
    categorie?: Categorie;
}
