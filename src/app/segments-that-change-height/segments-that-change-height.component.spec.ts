import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentsThatChangeHeightComponent } from './segments-that-change-height.component';

describe('SegmentsThatChangeHeightComponent', () => {
  let component: SegmentsThatChangeHeightComponent;
  let fixture: ComponentFixture<SegmentsThatChangeHeightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsThatChangeHeightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentsThatChangeHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
