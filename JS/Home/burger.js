
function linksBurger1() {
    let katLinks1 = document.getElementsByClassName('katLinks1').item(0)
    let katLinks2 = document.getElementsByClassName('katLinks2').item(0)
    let nav = document.getElementById("nav")

    let links1 = document.getElementById('linksBurger1')
    let links2 = document.getElementById('linksBurger2')

    katLinks2.classList.add('hidden')

    links1.style.color = 'Orange'
    links2.style.color = ''
    nav.style.width = "640px"
    links2.nextElementSibling.style.width = "75%"
    links1.nextElementSibling.style.width = "75%"

    katLinks1.classList.remove('hidden')
}
function linksBurger2() {
    let katLinks2 = document.getElementsByClassName('katLinks2').item(0)
    let katLinks1 = document.getElementsByClassName('katLinks1').item(0)
    let nav = document.getElementById("nav")

    let links1 = document.getElementById('linksBurger1')
    let links2 = document.getElementById('linksBurger2')

    katLinks1.classList.add('hidden')
    links2.style.color = 'Orange'
    links1.style.color = ''
    nav.style.width = "940px"

    links1.nextElementSibling.style.width = "75%"
    links2.nextElementSibling.style.width = "75%"

    katLinks2.classList.remove('hidden')
}
function navBurger() {
    let navB2 = document.getElementById('navigationBurger')
    navB2.classList.toggle('active')
    navB2.classList.toggle('hidden')
    let links1 = document.getElementById('linksBurger1')
    links1.click()
}

export { linksBurger1, linksBurger2, navBurger };