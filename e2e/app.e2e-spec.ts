import { ProfileAppPage } from './app.po';

describe('profile-app App', function() {
  let page: ProfileAppPage;

  beforeEach(() => {
    page = new ProfileAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
