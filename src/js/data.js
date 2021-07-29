// export const DATA = {
//     data: [
//         {
//             id: 1,
//             title: 'Lorem'
//         },
//         {
//             id: 2,
//             title: 'Eminem'
//         },
//         {
//             id: 3,
//             title: 'Light'
//         },
//     ]
// }
const [...inputs] = document.querySelectorAll('form input')
const [...texts] = document.querySelectorAll('form textarea')
console.log(inputs)
console.log(texts)

let formData = {
    name: '',
    lastName: '',
    message: ''
}

inputs[0].oninput = function(e) {
    formData.name = e.target.value
}
inputs[1].oninput = function(e) {
    formData.lastName = e.target.value
}
texts[0].oninput = function(e) {
    formData.message = e.target.value
}

btnSend.onclick = function() {
    if (!formData.name) {
        inputs[0].style.borderColor = 'red'
    } else {
        inputs[0].style.borderColor = 'green'
    }
    if (!formData.lastName) {
        inputs[1].style.borderColor = 'red'
    } else {
        inputs[1].style.borderColor = 'green'
    }
    if (!formData.message) {
        texts[0].style.borderColor = 'red'
    } else {
        texts[0].style.borderColor = 'green'
    }
}