import { ArrayType } from "@angular/compiler";
import { Collection } from "./Collection";

export interface Stylo {
    id : number;
    nom : String;
    edition : boolean;
    collection : Collection;
    prix : number;
    couleurs : String[]
    description : String;
    imageUrl: String;
}
