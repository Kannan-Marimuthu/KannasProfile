import { Injectable } from '@angular/core';
import { Experiences } from '../experience/mock-experience';


@Injectable()
export class ExperienceService {

  getExperiences() { return Experiences };

  constructor() { }

}
