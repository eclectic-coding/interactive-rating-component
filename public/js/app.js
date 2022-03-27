const selectionBlk = document.getElementById('selection');

selectionBlk.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    const parentContainer = document.getElementById('selection')
    const targetSelection = e.target
    const card = document.getElementById('welcome-card')
    const message = document.getElementById('message')
    const selected = e.target.textContent

    if (parentContainer.querySelectorAll('.active').length === 0) { // Find any `active` classes
      targetSelection.classList.add('active')
      card.style.display = 'none' // hide card
      message.innerText += `You selected ${selected} out of 5` // add to thank you message
      // display thank you card
    } else { // remove existing active classes
      const nodeList = parentContainer.querySelectorAll('.active')
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove('active');
      }
      targetSelection.classList.add('active')
      card.style.display = 'none' // hide card
      message.innerText += `You selected ${selected} out of 5` // add to thank you message
      // display thank you card
    }
  }
})
