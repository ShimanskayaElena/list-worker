import { ListWorkerPage } from './app.po';

describe('list-worker App', () => {
  let page: ListWorkerPage;

  beforeEach(() => {
    page = new ListWorkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
