import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-isac',
  templateUrl: './isac.page.html',
  styleUrls: ['./isac.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IsacPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
