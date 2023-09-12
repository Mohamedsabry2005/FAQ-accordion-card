let x = document.querySelectorAll('.question-card');

x.forEach(element => {
  element.addEventListener('click',()=>{
    if (element.classList.contains('active')) {
      element.classList.toggle('active')
    }else{
      x.forEach(ele => {
        ele.classList.remove('active')
      })
    }
    element.classList.add('active')
  })
});