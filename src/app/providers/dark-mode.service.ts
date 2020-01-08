import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DarkModeService {
  public shouldDark = new BehaviorSubject(false);
  constructor() {
    const shouldMatch = window.matchMedia('(prefers-color-scheme: dark)');
    this.shouldDark.next(shouldMatch.matches)
    shouldMatch.addListener(({ matches }) => this.shouldDark.next(matches));
  }
}
