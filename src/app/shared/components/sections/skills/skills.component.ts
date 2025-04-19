import { Component, OnInit } from '@angular/core';
import {
  Skill,
  SkillList,
  SkillsService,
} from 'src/app/shared/services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent implements OnInit {
  skills: SkillList = {
    frontend: [],
    backend: [],
    databases: [],
    otherSkills: [],
  };

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService
      .getSkills()
      .subscribe((response) => (this.skills = response));
  }
}
