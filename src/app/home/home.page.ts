import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  volume: number = 10; // Valeur initiale du slider
  isActive: boolean = false; // Valeur initiale de l'interrupteur

  // Fonction appelée lorsque la valeur du slider change
  onVolumeChange(event: CustomEvent) {
    console.log('Nouvelle valeur du slider :', event.detail.value);
  }

  // Fonction appelée lorsque la valeur de l'interrupteur change
  onToggleChange() {
    console.log('État de l\'interrupteur :', this.isActive);
  }
}
