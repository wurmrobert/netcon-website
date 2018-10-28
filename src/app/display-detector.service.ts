import { Injectable, NgZone } from '@angular/core';

declare var MobileDetect: any;

export const PHONE_BREAKPOINT: number = 992;

@Injectable({
  providedIn: 'root'
})
export class DisplayDetector {

  private width: number;
  private height: number;
  private type: DisplayType;

  private typeChangedListeners: { (type: DisplayType): void }[] = []
  private heightChangedListeners: { (height: number): void }[] = [];
  private widthChangedListeners: { (height: number): void }[] = [];

  private readonly mobileDetect = new MobileDetect(window.navigator.userAgent);

  public constructor(ngZone:NgZone) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    window.onresize = (e) => {
        ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.notifyHeightChanged(this.height);
            this.notifyWidthChanged(this.width);
            this.verifyType();
        });
    }
    this.verifyType();
  }



  public onDeviceChanged(listener: { (type: DisplayType): void}) {
    this.typeChangedListeners.push(listener);
  }

  public unregisterOnDeviceChanged(listener: { (type: DisplayType): void}) {
    this.typeChangedListeners = this.typeChangedListeners.filter(l => l !== listener);
  }

  public onHeightChanged(listener: { (height: number): void}) {
    this.heightChangedListeners.push(listener);
  }

  public onWidthChanged(listener: { (height: number): void}) {
    this.widthChangedListeners.push(listener);
  }


  public getDeviceType(): DisplayType {
    return this.type;
  }

  public getHeight(): number {
    return this.height;
  }

  public getWidth(): number {
    return this.width;
  }


  private verifyType() {
    let oldType = this.type;

    if(this.width < PHONE_BREAKPOINT) {
      this.type = DisplayType.Phone;
    } else {
      this.type = DisplayType.Desktop;
    }

    if(oldType !== this.type) {
      // type has changed
      this.notifyDeviceChanged(this.type);
    }
  }


  private notifyDeviceChanged = (type: DisplayType) => {
    this.typeChangedListeners.forEach(listener => {
      listener(type);
    });
  }

  private notifyHeightChanged = (height: number) => {
    this.heightChangedListeners.forEach(listener => {
      listener(height);
    });
  }


  private notifyWidthChanged = (height: number) => {
    this.widthChangedListeners.forEach(listener => {
      listener(height);
    });
  }

  public get isSafari(): boolean {
    let w: any = window;
    return  w.safari != null;
  }

  public get isIPhone(): boolean {
    return this.mobileDetect.is('iPhone') === true;
  }

  public get isMac(): boolean {
    return window.navigator.userAgent.indexOf('Macintosh') !== -1;
  }
}



export enum DisplayType {
  Phone,
  Desktop
}