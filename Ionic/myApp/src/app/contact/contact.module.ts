import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page'; // Importe o componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ContactPage, // Adicione o componente aqui
  ],
})
export class ContactPageModule {}
