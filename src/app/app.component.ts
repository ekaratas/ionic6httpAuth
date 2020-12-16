import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Storage } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  async getItem() {
    const { value } = await Storage.get({ key: 'user_ionichttpAuth' });
    if (value != null)
      return true;
      else
      return false;
  }

  kontrol()
  {
this.getItem().then(deger => {
  if (deger)
    this.router.navigateByUrl('/home');
  else
  this.router.navigateByUrl('/');
})
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.kontrol();
    });
  }
}
