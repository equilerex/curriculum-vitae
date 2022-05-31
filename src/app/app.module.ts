import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { dateFormatPipe } from './utilities/date-format.pipe';
import { SkillListingComponent } from './components/skill-listing/skill-listing.component';
import { ExperienceCardTaskComponent } from './components/experience-card/experience-card-task.component';
import { strippedUrlPipe } from './utilities/stripped-url.pipe';

const COMPONENTS = [
  AppComponent,
  InfoBlockComponent,
  ExperienceCardComponent,
  MainHeaderComponent,
  SkillListingComponent,
  ExperienceCardTaskComponent,
];

const UTILITIES = [dateFormatPipe, strippedUrlPipe];

@NgModule({
  declarations: [...COMPONENTS, ...UTILITIES],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
