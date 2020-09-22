
import menuTemplate from './templates.hbs';
import menu from './menu.json';

const menuLists = {menu : menu};
const toolBarDOM = document.querySelector('#theme-switch-control');
const page = document.querySelector('body');
const menuList = document.querySelector('ul#menu');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const initialTheme = () =>{
    if (localStorage.getItem('Theme') === Theme.DARK){
        toolBarDOM.checked = true;
        page.classList.add(Theme.DARK);  
    }
};

const changeTheme = () => {
    if (toolBarDOM.checked) {
    page.classList.remove(Theme.LIGHT);
    page.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
} else {
        page.classList.remove(Theme.DARK);
        page.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
};
initialTheme();
toolBarDOM.addEventListener('change', changeTheme);
menuList.insertAdjacentHTML('beforeend',  menuTemplate(menuLists));










// import menu from './menu.json';
// import menuTemplate from './templates.hbs';

// const menuDraft = { menu: menu };
// console.log(menuDraft);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const refs = {
//   body: document.querySelector('body'),
//   menuList: document.querySelector('ul#menu'),
//   themeCheckbox: document.querySelector('#theme-switch-control'),
// };

// const setInitialTheme = () => {
//   if (localStorage.getItem('theme') === Theme.DARK) {
//     refs.themeCheckbox.checked = true;
//     refs.body.classList.add(Theme.DARK);
//   }
// };

// const handleThemeChange = () => {
//   if (refs.themeCheckbox.checked) {
//     refs.body.classList.remove(Theme.LIGHT);
//     refs.body.classList.add(Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// setInitialTheme();
// refs.themeCheckbox.addEventListener('change', handleThemeChange);
// refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(menuDraft));
