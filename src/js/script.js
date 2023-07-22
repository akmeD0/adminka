const burger = document.getElementById('burger')
const aside = document.getElementById('aside')

burger.onclick = () => {
    aside.classList.toggle('active')
    burger.classList.toggle('active')
}