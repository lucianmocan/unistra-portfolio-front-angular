import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

interface FlagLanguage {
  flagSource: String;
  flagAltText: String;
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

  constructor(){}
  
  frenchLang : FlagLanguage = {
    flagAltText : "drapeau de la France",
    flagSource: "assets/flags/france.png"
  }

  englishLang : FlagLanguage = {
    flagAltText : "United Kingdom's Flag",
    flagSource: "assets/flags/uk.png"
  }

  roLang : FlagLanguage = {
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
