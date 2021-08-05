import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      &copy;sutura.in 2021
    </span>
    <div class="socials">
      <a href="https://github.com/SuturaOrg" target="_blank" class="ion ion-social-github"></a>
      <a href="https://web.facebook.com/Sutura-100906312128627" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
