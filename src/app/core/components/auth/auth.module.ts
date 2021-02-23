import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE } from "ng-recaptcha";
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzTabsModule,
    NzInputModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    RecaptchaV3Module,
    NzMessageModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LfOEsYUAAAAAOefpoHOyvfHv6XqFcSmXBL0o8rn"
    },
    {
      provide: RECAPTCHA_BASE_URL,
      useValue: "https://recaptcha.net/recaptcha/api.js",
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "zh-CN",
    },
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
