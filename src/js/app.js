import '../scss/app.scss'
import 'bootstrap'
// import 'slick-carousel'

const btn = document.querySelector('.search__btn')
const btnMore = document.querySelector('.more__btn')
const input = document.querySelector('.search__input')
const field = document.querySelector('.field__body')
let search = []

const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:3002/service')
    search = await response.json()
    return response
}
fetchData()

function searchData(){
    const value = input.value
    if(value){
        search = search.service.filter((el) => el.title.startsWith(value))
        search.map((item) => {
        field.insertAdjacentHTML('beforeend', `<div>${item.title}</div>`)
    })
    }
}
btn.onclick = searchData
input.addEventListener('keypress', function(e){
      if(e.which === 13){
          e.preventDefault()
          searchData()
      }
});

// SERVICE
window.onload = async function(){
    try {
        const response = await fetch("http://127.0.0.1:3002/service")
        if (response.status === 200) {
            const result = await response.json()
            serviceImg1.setAttribute('src', result.service[0].img)
            serviceTitle1.innerHTML = result.service[0].title
            serviceImg2.setAttribute('src', result.service[1].img)
            serviceTitle2.innerHTML = result.service[1].title
            serviceImg3.setAttribute('src', result.service[2].img)
            serviceTitle3.innerHTML = result.service[2].title
            serviceImg4.setAttribute('src', result.service[3].img)
            serviceTitle4.innerHTML = result.service[3].title
            serviceImg5.setAttribute('src', result.service[4].img)
            serviceTitle5.innerHTML = result.service[4].title
            serviceImg6.setAttribute('src', result.service[5].img)
            serviceTitle6.innerHTML = result.service[5].title
        }
    } catch (err) {
        console.log(err)
    }
}
btnMore.onclick = async function(){
    try {
        const response = await fetch("http://127.0.0.1:3002/service")
        if (response.status === 200) {
            const result = await response.json()
            serviceImg7.setAttribute('src', result.service[6].img)
            serviceTitle7.innerHTML = result.service[6].title
            serviceImg8.setAttribute('src', result.service[7].img)
            serviceTitle8.innerHTML = result.service[7].title
            serviceImg9.setAttribute('src', result.service[8].img)
            serviceTitle9.innerHTML = result.service[8].title
            serviceImg10.setAttribute('src', result.service[9].img)
            serviceTitle10.innerHTML = result.service[9].title
            serviceImg11.setAttribute('src', result.service[10].img)
            serviceTitle11.innerHTML = result.service[10].title
            serviceImg12.setAttribute('src', result.service[11].img)
            serviceTitle12.innerHTML = result.service[11].title
        }
    } catch (err) {
        console.log(err)
    }
}
const [...inputs] = document.querySelectorAll('#form input')
const textarea = document.getElementById('textarea')
let formData ={
    name: '',
    surname: '',
    message: ''
}
inputs[0].oninput = function (e){
    formData.name = e.target.value
}
inputs[1].oninput = function (e){
    formData.surname = e.target.value
}
textarea.oninput = function(e){
    formData.message = e.target.value
}
btnSend.onclick = function(){
    if (!formData.name){
        inputs[0].style.borderColor = 'red'
    } else {
        inputs[0].style.borderColor = '#616161'
    }
    if (!formData.surname){
        inputs[1].style.borderColor = 'red'
    } else {
        inputs[1].style.borderColor = '#616161'
    }
    if (!formData.message){
        textarea.style.borderColor = 'red'
    } else {
        textarea.style.borderColor = '#616161'
    }
}