import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor (public translation: TranslateService) {}
}
