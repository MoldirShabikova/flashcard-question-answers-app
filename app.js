const addButton = document.querySelector('.addBtn')
const saveBtn = document.querySelector('.saveBtn')
const closeBtn = document.querySelector('.closingBtn')
const popUp = document.querySelector('#pop-up')
const questionTextArea = document.querySelector('#questionArea')
const answerTextArea = document.querySelector('#answerArea')
const containerPopUp = document.querySelector('.container')
let show = false
addButton.addEventListener('click', () => {
  popUp.style.display = 'block'
})

saveBtn.addEventListener('click', () => {
  const questionValue = questionTextArea.value
  const answerValue = answerTextArea.value
  if (questionValue === '' || answerValue === '') {
    return alert('Please enter question.')
  } else {
    let popUpMessage = document.createElement('div')
    let text = document.createElement('p')
    text.innerHTML = questionValue
    let showAndHide = document.createElement('p')
    showAndHide.innerHTML = answerValue
    showAndHide.innerHTML = 'Show Answer / Hide Answer'

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    containerPopUp.appendChild(popUpMessage)
    popUpMessage.appendChild(text)
    popUpMessage.appendChild(showAndHide)
    popUpMessage.appendChild(deleteBtn)

    questionTextArea.value = ''
    answerTextArea.value = ''

    deleteBtn.addEventListener('click', () => {
      popUpMessage.innerHTML = ''
    })
    showAndHide.addEventListener('click', () => {
      showAndHide.innerHTML = 'Show Answer / Hide Answer'
      if (show === true) {
        showAndHide.innerHTML = answerValue
        show = false
      } else {
        showAndHide.innerHTML = 'Show Answer / Hide Answer'
        show = true
      }
    })
    closeBtn.addEventListener('click', () => {
      popUp.style.display = ' none'
    })
  }
})
