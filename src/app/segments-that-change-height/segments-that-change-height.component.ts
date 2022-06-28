import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-segments-that-change-height',
  templateUrl: './segments-that-change-height.component.html',
  styleUrls: ['./segments-that-change-height.component.scss'],
})
export class SegmentsThatChangeHeightComponent implements AfterViewInit {

  @ViewChild('outerCard') outerCard: any;
  outerCardMinHeight = '0px';

  numOfItems = 15;

  constructor(
    private renderer: Renderer2
  ) { }

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
    setTimeout(() => {
      // console.log('AFTER timeout', this.outerCard.el.offsetHeight);
      this.setOuterCardMinHeight();
    });
  }

  setOuterCardMinHeight() {
    /**
     * We set the card to the greater of it's last height
     * or the new height. We are keeping track of it with
     * outerCardMinHeight and then also setting the style.
     */
    this.outerCardMinHeight = `${
      Math.max(
        parseFloat(this.outerCardMinHeight),
        this.outerCard.el.offsetHeight
      )
    }px`;

    this.renderer.setStyle(
      this.outerCard.el,
      'min-height',
      this.outerCardMinHeight
    );
  }

}
