import { ReupPage } from './app.po';

describe('reup App', () => {
  let page: ReupPage;

  beforeEach(() => {
    page = new ReupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
