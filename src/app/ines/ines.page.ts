import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ines',
  templateUrl: './ines.page.html',
  styleUrls: ['./ines.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
