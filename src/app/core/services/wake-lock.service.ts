import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WakeLockService {
  wakelock = null;

  async requestWakeLock(): Promise<void> {
    try {
      if ('wakeLock' in navigator) {
        // can fail due to user preferences on device or low battery
        // @ts-ignore
        this.wakelock = await navigator.wakeLock.request('screen');
      }
    } catch (error) {
      console.error(error);
    }
  }

  releaseWakeLock(): void {
    if (this.wakelock) {
      // @ts-ignore
      this.wakelock.release();
      this.wakelock = null;
    } else {
      console.warn('Wakelock was not requested');
    }
  }
}
