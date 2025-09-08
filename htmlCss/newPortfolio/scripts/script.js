const skillsList = document.querySelectorAll('.carrossel div ul li')

skillsList.forEach(item => {
  const skillName = item.textContent
  item.classList.add('flex-carrossel')
  item.innerHTML = `<img src="../assets/whiteStar.svg">
 ${skillName}`
})

// const servicesItem = document.querySelectorAll('.servicesItem')
// servicesItem.forEach(item => {
//   const img = item.querySelector('img')
//   const p = item.querySelector('.servicesDesc')
//   console.log(img)
//   console.log(p)

//   img.addEventListener('click', () => {
//     p.classList.toggle('active')
//   })
// })

document.querySelectorAll('.servicesItem img').forEach(img => {
  img.addEventListener('click', () => {
    const p = img.closest('.servicesItem').querySelector('p');
    p.classList.toggle('active');
        if (p.classList.contains('active')) {
          img.style.rotate = '180deg'
        } else {
          img.style.rotate = '0deg'
        }
  });
});