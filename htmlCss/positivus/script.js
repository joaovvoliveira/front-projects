const stepsItem = document.querySelectorAll('.stepsItem')
const stepsArray = Array.from(stepsItem)

stepsArray.forEach(item => {

  const btnItem = item.querySelector('a')
  const paragraph = item.querySelector('p')

  console.log(item)
  console.log(paragraph)

  item.classList.toggle('openedWorkProcessItemGrey')
  item.classList.toggle('openedWorkProcessItemGreen')
  paragraph.classList.toggle('displayNone')
  paragraph.classList.toggle('paragraphPadding')

  btnItem.addEventListener('click', () => {
    const img = btnItem.querySelector('img')
    console.log(img)
    if(img.getAttribute('src') === './minus.svg') {
      img.setAttribute('src', './plus.svg')
    } else {
      img.setAttribute('src', './minus.svg')
    }
  })
})