import getRandomColor from "./utils";

export default function initApp() {
    const changeColorBtn = document.createElement('button');
    changeColorBtn.className = 'button';
    changeColorBtn.textContent = 'Изменить цвет страницы';
    document.body.append(changeColorBtn);

    changeColorBtn.addEventListener('click', () => {
        const bodyColor = getRandomColor()
        document.body.style.backgroundColor = `RGB(${bodyColor})`
    })
}