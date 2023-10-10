import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VencimientoCarteraPage } from './vencimiento-cartera.page';

describe('VencimientoCarteraPage', () => {
  let component: VencimientoCarteraPage;
  let fixture: ComponentFixture<VencimientoCarteraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VencimientoCarteraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VencimientoCarteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
