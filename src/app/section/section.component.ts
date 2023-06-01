import { Component } from '@angular/core';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  }

  const radio = document.querySelector('.manual-btn') as HTMLElement;
  let cont: number = 1;
  
  const radio1 = document.getElementById('radio1') as HTMLInputElement;
  if (radio1) {
    radio1.checked = true;
  }
  
  setInterval(() => {
    proximaImg();
  }, 5000);
  
  function proximaImg(): void {
    cont++;
  
    if (cont > 3) {
      cont = 1;
    }
  
    const radioElement = document.getElementById('radio' + cont) as HTMLInputElement;
    if (radioElement) {
      radioElement.checked = true;
    }
  }
  