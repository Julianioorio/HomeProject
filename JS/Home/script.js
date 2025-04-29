import { linksBurger1, linksBurger2, navBurger } from "./burger.js";
import "./Search.js"
let btnBurger1 = document.getElementById('linksBurger1')
let btnBurger2 = document.getElementById('linksBurger2')
let navB = document.getElementById('burger')
btnBurger1.onclick = linksBurger1
btnBurger2.onclick = linksBurger2
navB.onclick = navBurger