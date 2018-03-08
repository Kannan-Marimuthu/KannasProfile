import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Experience } from '../experience/experience';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];
  experience: Experience;

  constructor(private experienceService: ExperienceService) {
    this.experiences = experienceService.getExperiences();
  }

  onSelect(experienceService: Experience): void {
    this.experience = experienceService;
  }

  ngOnInit() {
  }
 

}
