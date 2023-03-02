import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit{

  languageOptions : Array<String> = [];
  clickedMenu : boolean = false;
  @ViewChild('language_menu') language_menu! : ElementRef;
  // @ViewChildren('language_option') languageOptions! : QueryList<ElementRef<{nativeElement: HTMLElement}>>;

  constructor(
    private renderer : Renderer2, 
  ){}

  languageOptionsTabInit(){
    this.languageOptions[0] = '<a #language_option href="#"><li><img src="assets/flags/france.png" alt="drapeau de la France"></li></a>';
    this.languageOptions[1] = '<a #language_option href="#"><li><img src="assets/flags/uk.png" alt="drapeau des Royaumes-Uni"></li></a>';
    this.languageOptions[2] = '<a #language_option href="#"><li><img src="assets/flags/ro.png" alt="drapeau de la Roumanie"></li></a>';
    this.renderer.appendChild(this.language_menu, this.languageOptions[0]);
  }

  ngOnInit(): void {
    this.languageOptionsTabInit();
  }

  ngAfterViewInit(): void {

  }


  clickOnLanguageMenu(event: Event){
      if (!this.clickedMenuCheck()){
        this.displayLanguageMenu();
      }
      else {
        this.hideLanguageMenu();
      }
  }

  clickedMenuCheck(){
    this.setClicked();
    return !this.clickedMenu; 
  }

  setClicked(){
      this.clickedMenu = !this.clickedMenu;
  }

  displayLanguageMenu(){
    // this.renderer.setStyle(this.languageOptions.toArray()[1].nativeElement, "display", "block");
    // this.renderer.setStyle(this.languageOptions.toArray()[2].nativeElement, "display", "block");
  }

  hideLanguageMenu(){
    // this.renderer.setStyle(this.languageOptions.toArray()[1].nativeElement, "display", "none");
    // this.renderer.setStyle(this.languageOptions.toArray()[2].nativeElement, "display", "none");
  }
}
