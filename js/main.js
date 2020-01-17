const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tabs content items
function selectItem(e) {
    removeBorder();
    removeShow();
    // Adding border to current tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show-class
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listener for tab clicks
tabItems.forEach( (item)=> item.addEventListener('click',selectItem))