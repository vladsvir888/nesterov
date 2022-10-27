export default (selector) => {
  if (!selector) {
    return;
  }

  const tabBtns = document.querySelectorAll(`${selector} .tabs__btn`);
  const tabPanels = document.querySelectorAll(`${selector} .tabs__panel`);

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabPanel = document.querySelector(`${selector} [data-panel-tab=${btn.id}]`);

      tabPanels.forEach(panel => {
        panel.classList.remove('show');
        panel.querySelector('.benefits-tabs__info-inner').classList.remove('transform-effect');
      });

      tabBtns.forEach(btn => {
        btn.classList.remove('active')
        btn.ariaSelected = 'false';
      });

      btn.classList.add('active');
      btn.ariaSelected = 'true';
      tabPanel.classList.add('show');
      tabPanel.querySelector('.benefits-tabs__info-inner').classList.add('transform-effect');
    });
  });
};
