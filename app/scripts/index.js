import LazyLoad from 'vanilla-lazyload';

import benefitsTabs from '../blocks/&organisms/benefits_tabs';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  benefitsTabs('.benefits-tabs');
});
