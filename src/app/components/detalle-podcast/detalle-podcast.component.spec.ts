import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePodcastComponent } from './detalle-podcast.component';

describe('DetallePodcastComponent', () => {
  let component: DetallePodcastComponent;
  let fixture: ComponentFixture<DetallePodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
