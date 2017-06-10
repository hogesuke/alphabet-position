import { AlphabetPositionPage } from './app.po';

describe('alphabet-position App', () => {
  let page: AlphabetPositionPage;

  beforeEach(() => {
    page = new AlphabetPositionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
