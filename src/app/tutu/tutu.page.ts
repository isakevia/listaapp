import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tutu',
  templateUrl: './tutu.page.html',
  styleUrls: ['./tutu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TutuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
