import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  templateUrl: 'about-popover.html'
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
