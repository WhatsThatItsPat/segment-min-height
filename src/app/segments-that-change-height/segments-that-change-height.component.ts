import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-segments-that-change-height',
  templateUrl: './segments-that-change-height.component.html',
  styleUrls: ['./segments-that-change-height.component.scss'],
})
export class SegmentsThatChangeHeightComponent implements AfterViewInit {

  @ViewChild('outerCard') outerCard: any;
  outerCardMinHeight = 0;

  numOfItems = 15;

  constructor() {}

  async ngAfterViewInit() {
    /**
     * Make sure Ionic is ready to get the height;
     * https://github.com/ionic-team/ionic-framework/issues/17920#issuecomment-478997010
     */
    await document.querySelector('ion-app').componentOnReady();
    // console.log(this.outerCard);
    // console.log(this.outerCard.el.offsetHeight);
    /**
     * Comment this out and we'll see the accidental click the first time.
     */
    this.setOuterCardMinHeight();
  }

  segmentChanged(event: Event) {
    const {
      detail: { value }
    } = event as any;
    this.numOfItems = value;

    // console.log('BEFORE timeout', this.outerCard.el.offsetHeight);
    /**
     * We have to wait a tick for the new height to be available.
     */
    setTimeout(() => {
      // console.log('AFTER timeout', this.outerCard.el.offsetHeight);
      this.setOuterCardMinHeight();
    });
  }

  setOuterCardMinHeight() {
    /**
     * We set the card to the greater of it's last recorded
     * height or the new height.
     */
    this.outerCardMinHeight = Math.max(
      this.outerCardMinHeight,
      this.outerCard.el.offsetHeight
    );
  }

}
