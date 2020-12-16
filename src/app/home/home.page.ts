import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}


  async removeItem(item) {
    await Storage.remove({ key: item });
  }

  logout()
  {

    this.removeItem('user_ionichttpAuth');
    this.router.navigateByUrl('/login');

  }

}
