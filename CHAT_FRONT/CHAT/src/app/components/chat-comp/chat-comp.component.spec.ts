import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCompComponent } from './chat-comp.component';

describe('ChatCompComponent', () => {
  let component: ChatCompComponent;
  let fixture: ComponentFixture<ChatCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
