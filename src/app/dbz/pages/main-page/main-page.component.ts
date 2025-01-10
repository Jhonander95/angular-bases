import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

constructor(public dbzService: DbzService) { }


}
