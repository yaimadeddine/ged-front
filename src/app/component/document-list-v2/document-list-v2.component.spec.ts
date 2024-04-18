import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListV2Component } from './document-list-v2.component';

describe('DocumentListV2Component', () => {
  let component: DocumentListV2Component;
  let fixture: ComponentFixture<DocumentListV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentListV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
