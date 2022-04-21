// 切换文本函数
function changeText(that, first, second) {
    return that.innerText = that.innerText === first ? second : first
}

// 获取元素
const navMenuItems = document.querySelectorAll('nav a');

// 设置 nav 的点击切换
function handleMenuItemClick(target){
    navMenuItems.forEach(item => {
        item.classList.remove('active');
        item.style='';
    });
    target.classList.add('active');

    //设置要展示的内容
    const cueerntSection = document.querySelector('.active-section');
    cueerntSection.classList.remove('active-section');
    const newCurrentSection = document.querySelector(`.${target.getAttribute('data-fan')}`);
    newCurrentSection.classList.add('active-section');
}

navMenuItems.forEach(item => {
    item.addEventListener('click',e => handleMenuItemClick(e.target));
    item.classList.contains('active') && handleMenuItemClick(item);
});
