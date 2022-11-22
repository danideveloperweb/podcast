import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecapituloPodcastComponent } from './detallecapitulo-podcast.component';

describe('DetallecapituloPodcastComponent', () => {
  let component: DetallecapituloPodcastComponent;
  let fixture: ComponentFixture<DetallecapituloPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecapituloPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallecapituloPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
