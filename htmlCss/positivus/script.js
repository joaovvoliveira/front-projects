const stepsItem = document.querySelectorAll('.stepsItem')
const stepsArray = Array.from(stepsItem)
// console.log(stepsArray)
console.log(stepsItem)
console.log(stepsArray)

stepsArray.forEach(item => {
  const btnItem = item.querySelector('a')
  const paragraph = item.querySelector('p')

  console.log(item)
  console.log(paragraph)

  btnItem.addEventListener('click', () => {
    item.classList.toggle('openedWorkProcessItemGrey')
    item.classList.toggle('openedWorkProcessItemGreen')
    paragraph.classList.toggle('displayNone')
    paragraph.classList.toggle('paragraphPadding')
    const img = btnItem.querySelector('img')
    console.log(img)
    if(img.getAttribute('src') === './minus.svg') {
      img.setAttribute('src', './plus.svg')
    } else {
      img.setAttribute('src', './minus.svg')
    }
  })
})