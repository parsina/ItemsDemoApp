import { ItemsDemoAppPage } from './app.po';

describe('items-demo-app App', () => {
  let page: ItemsDemoAppPage;

  beforeEach(() => {
    page = new ItemsDemoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
