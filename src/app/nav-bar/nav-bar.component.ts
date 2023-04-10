import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { TranslateService } from '../translate.service';

interface FlagLanguage {
  code: string;
  flagName: string;
  flagSource: string;
  flagAltText: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit{

  langOptions: Array<FlagLanguage> = [];
  clickedLangMenu : boolean = false;
  clickedMenu : boolean = false;

  constructor(public translation: TranslateService){}
  
  frenchLang : FlagLanguage = {
    code: "fr",
    flagName: "Français",
    flagAltText : "drapeau de la France",
    flagSource: "assets/flags/france.png"
  }

  englishLang : FlagLanguage = {
    code: "en",
    flagName: "English",
    flagAltText : "United Kingdom's Flag",
    flagSource: "assets/flags/uk.png"
  }

  roLang : FlagLanguage = {
    code: "ro",
    flagName: "Română",
    flagAltText : "Drapelul României",
    flagSource: "assets/flags/ro.png"
  }
  
  currentLang : FlagLanguage = this.frenchLang;
  languageOnInit(){
    this.langOptions.push(this.frenchLang, this.englishLang, this.roLang);
  }

  ngOnInit(): void {
    this.languageOnInit();
  }
  
  selectedLanguage(lang: FlagLanguage){
    this.currentLang = lang;
    let index = 0;
    for (let i = 0; i < this.langOptions.length; i++){
      if (this.langOptions[i].flagSource == lang.flagSource){
        index = i;
        break;
      }
    }
    if (index != 0){
      this.translation.getLanguage(lang.code);
      let tmp = this.langOptions[0];
      this.langOptions[0] = lang;
      this.langOptions[index] = tmp;
    }
  }

  clickedLangMenuCheck(){
    this.clickedLangMenu = !this.clickedLangMenu;
    return !this.clickedLangMenu; 
  }

  clickedMenuCheck(){
    this.clickedMenu = !this.clickedMenu;
    return !this.clickedMenu; 
  }

  hideLanguageMenuOnMouseLeave(event: Event){
    this.clickedLangMenu = false;
  }
  showLanguageMenuOnMouseEnter(event: Event){
    this.clickedLangMenu = true;
  }

  clickOnLanguageMenu(event: Event){
    if (!this.clickedLangMenuCheck()){
      this.clickedLangMenu = true;
    }
    else {
      this.clickedLangMenu = false;
    }
}
  clickOnMenu(event: Event){
    if (!this.clickedMenuCheck()){
      this.clickedMenu = true;
    }
    else {
      this.clickedMenu = false;
    }
  }
  
  hideMenuOnMouseLeave(event: Event){
    this.clickedMenu = false;
  }
  showMenuOnMouseEnter(event: Event){
    this.clickedMenu = true;
  }

}
