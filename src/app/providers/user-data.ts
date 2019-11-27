import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage
  ) { }

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  async login(username: string): Promise<any> {
    await this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    await window.dispatchEvent(new CustomEvent('user:login'));
  }

  async signup(username: string): Promise<any> {
    await this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    await window.dispatchEvent(new CustomEvent('user:signup'));
  }

  async logout(): Promise<any> {
    await this.storage.remove(this.HAS_LOGGED_IN);
    await this.storage.remove('username');
    await window.dispatchEvent(new CustomEvent('user:logout'));
  }

  async setUsername(username: string): Promise<any> {
    await this.storage.set('username', username);
  }

  async getUsername(): Promise<string> {
    return await this.storage.get('username');
  }

  async isLoggedIn(): Promise<boolean> {
    return await this.storage.get(this.HAS_LOGGED_IN);
  }

  async checkHasSeenTutorial(): Promise<string> {
    return await this.storage.get(this.HAS_SEEN_TUTORIAL);
  }
}
