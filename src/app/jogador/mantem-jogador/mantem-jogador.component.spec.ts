import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemJogadorComponent } from './mantem-jogador.component';

describe('MantemJogadorComponent', () => {
  let component: MantemJogadorComponent;
  let fixture: ComponentFixture<MantemJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemJogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
