// 获取 Dom
const switchEl = document.querySelector('.switch')
const fontEl = document.querySelector('#font')
const themeEl = document.querySelector('#theme')

// 从本地存储查找主题
document.addEventListener('DOMContentLoaded', () => {
    const storeTheme = localStorage.getItem('theme')
    if (!!storeTheme) {
        themeEl.href = storeTheme
    }
    storeTheme.includes('light') ? changClass(false) : changClass(true)
})

// 改变样式
// true: 切换为 dark, false: 切换为 light
function changClass (isLight) {
    if (!!isLight) {
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

// 处理主题切换点击
function handleSwitchClick(target) {
    if (target.classList.contains('fa') || target.classList.contains('switch')) {
        if (target.classList.contains('fa-sun-o') || target.classList.contains('switch_sun')) {
            changClass(true)
        } else {
            changClass(false)
        }
    }
    isDark()
}

// 判断并设置主题
function isDark() {
    if (themeEl.href.includes('light')) {
        themeEl.href = './css/dark.css'
    } else {
        themeEl.href = './css/light.css'
    }
    localStorage.setItem('theme', themeEl.href)
}

// 给按钮添加主题切换功能
switchEl.addEventListener('click', e => handleSwitchClick(e.target))
