import { Component, OnInit } from '@angular/core';
import { emploi } from '../core/model/emploi';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {
  ListEmploi!:emploi[];

  constructor() { }

  ngOnInit(): void {
    this.ListEmploi=[
      {reference:"4SE",titre:"aaaaa",entreprise:"bbbbb",etat:true},
      {reference:"4SEA",titre:"bdhfb",entreprise:"bbbbb",etat:true},
      {reference:"3b",titre:"hjdfuh",entreprise:"jfnjhgf",etat:false},
      {reference:"5SE",titre:"kjfebh",entreprise:"klrn",etat:true}
  ]
  }
  calculBilan(){
    let bilan = 0;
    for (const emploi of this.ListEmploi){
      if(!emploi.etat){
        bilan++;
      }
    }
    alert(`
    il y a ${bilan} offres d emploi non cloturées`
    );
  }
  
  recherche(value:string){
    let resultats = [];
    for (const emploi of this.ListEmploi){
      if(value==emploi.entreprise){
        resultats.push(emploi);
      }
    }
    this.ListEmploi = resultats;
    return resultats;
  }
  

}
