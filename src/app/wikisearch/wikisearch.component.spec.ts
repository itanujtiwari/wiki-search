import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikisearchComponent } from './wikisearch.component';

describe('WikisearchComponent', () => {
  let component: WikisearchComponent;
  let fixture: ComponentFixture<WikisearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikisearchComponent]
    });
    fixture = TestBed.createComponent(WikisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
