import { KendoUiGridDemoPage } from './app.po';

describe('kendo-ui-grid-demo App', () => {
  let page: KendoUiGridDemoPage;

  beforeEach(() => {
    page = new KendoUiGridDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
