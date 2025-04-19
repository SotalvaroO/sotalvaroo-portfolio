import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

export interface Skill {
  skillName: string;
  percentage: number;
  icon: string;
}

export interface SkillList {
  frontend: Skill[];
  backend: Skill[];
  databases: Skill[];
  otherSkills: Skill[];
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private jsonUrl = 'assets/skills.json';
  private skillsSubject = new BehaviorSubject<SkillList>({
    frontend: [],
    backend: [],
    databases: [],
    otherSkills: [],
  });

  constructor() {
    this.loadSkills();
  }

  private loadSkills(): void {
    from(fetch(this.jsonUrl).then((response) => response.json())).subscribe(
      (data) => this.skillsSubject.next(data)
    );
  }

  getSkills(): Observable<SkillList> {
    return this.skillsSubject.asObservable();
  }
}
