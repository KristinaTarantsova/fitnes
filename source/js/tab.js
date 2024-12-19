const tab = function () {
  const tabNav = document.querySelectorAll('.ticket__header');
  const tabContent = document.querySelectorAll('.tab');
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove('ticket-corrent');
    });

    this.classList.add('ticket-corrent');
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName){
    tabContent.forEach((item) => {

      if (item.classList.contains(tabName)) {
        item.classList.add('ticket-corrent');
      } else {
        item.classList.remove('ticket-corrent');
      }
    });
  }
};

tab();
