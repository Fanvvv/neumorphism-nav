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

// 获取 switch
const switchEl = document.querySelector('.switch')
const fontEl = document.querySelector('#font')
const themeEl = document.querySelector('#theme')

function handleSwitchClick(target) {
    if (target.classList.contains('fa') || target.classList.contains('switch')) {
        if (target.classList.contains('fa-sun-o') || target.classList.contains('switch_sun')) {
            fontEl.classList.remove('fa-sun-o')
            fontEl.classList.add('fa-moon-o')
            switchEl.classList.remove('switch_sun')
            switchEl.classList.add('switch_moon')
        } else {
            fontEl.classList.remove('fa-moon-o')
            fontEl.classList.add('fa-sun-o')
            switchEl.classList.remove('switch_moon')
            switchEl.classList.add('switch_sun')
        }
    }
    isDark()
}

function isDark() {
    if (themeEl.href.includes('light')) {
        themeEl.href = './css/dark.css'
    } else {
        themeEl.href = './css/light.css'
    }
}
switchEl.addEventListener('click', e => handleSwitchClick(e.target))


