const navLinks = document.querySelectorAll(".nav__item");
const tabsItems = document.querySelectorAll(".section");

navLinks.forEach(onTabClick);


function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("href");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            navLinks.forEach(function (item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
document.querySelector('.nav__item').click();