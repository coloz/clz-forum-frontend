import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/components/header/header.module';
import { FooterModule } from './core/components/footer/footer.module';
import { TagListModule } from './core/components/tag-list/tag-list.module';
import { UserCardModule } from './core/components/user-card/user-card.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RecommenderModule } from './core/components/recommender/recommender.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { StarListModule } from './core/components/star-list/star-list.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    TagListModule,
    UserCardModule,
    NzBreadCrumbModule,
    NzButtonModule,
    RecommenderModule,
    NzCarouselModule,
    StarListModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
