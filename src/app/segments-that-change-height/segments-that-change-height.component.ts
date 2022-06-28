import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-segments-that-change-height',
  templateUrl: './segments-that-change-height.component.html',
  styleUrls: ['./segments-that-change-height.component.scss'],
})
export class SegmentsThatChangeHeightComponent implements AfterViewInit {

  numOfItems = 15;

  constructor(
    private el: ElementRef
  ) { }

  async ngAfterViewInit() {
    await document.querySelector('ion-app').componentOnReady();
    console.log('after', this.el);
    console.log('after', this.el.nativeElement.offsetHeight);
  }

  segmentChanged(event: Event) {
    const {
      detail: { value }
    } = event as any;
    // console.log(value);
    this.numOfItems = value;

    console.log('BEFORE timeout', this.el.nativeElement.offsetHeight);
    setTimeout(() => {
      console.log('AFTER timeout', this.el.nativeElement.offsetHeight);
    });

  }

}
