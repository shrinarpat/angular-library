import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  logs: string[] = [];

  constructor() { }

  addLog(log: string) {
    console.log('log added 👍 ', log);
    this.logs.push(log)
  }
}
