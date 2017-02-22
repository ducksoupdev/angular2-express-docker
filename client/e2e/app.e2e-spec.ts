import { AdvancedComponentsPage } from './app.po';

describe('angular2-express-docker App', () => {
  let page: AdvancedComponentsPage;

  beforeEach(() => {
    page = new AdvancedComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
