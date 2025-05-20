import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page';
import { NavController } from '@ionic/angular';

describe('TabsPage', () => {
  let component: TabsPage;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(() => {
    // Crea un espía (mock) para NavController
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);

    component = new TabsPage(navCtrlSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe navegar a /settings al llamar openSettings', () => {
    component.openSettings();
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith('/settings');
  });
});
