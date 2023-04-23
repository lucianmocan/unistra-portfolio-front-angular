import { Injectable } from '@angular/core';
import * as fr from "../../translations/fr.json";
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }
  languagePack = fr;
  getLanguage(language: string){
    import('../../translations/'+language+'.json').then((data:any) => {
      this.languagePack = data;
    })
  }
}
