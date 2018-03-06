import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];

  constructor(private experienceService: ExperienceService) {
    this.experiences = experienceService.getExperiences();
  }

  ngOnInit() {
  }

}
