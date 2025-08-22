const skillsList = document.querySelectorAll('.carrossel div ul li')

skillsList.forEach(item => {
  const skillName = item.textContent
  item.classList.add('flex-carrossel')
  item.innerHTML = `<img src="../assets/whiteStar.svg">
 ${skillName}`
})