// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
//

const saveLincolnButton = document.querySelector('#save_lincoln')
const saveZombieLincoln = document.querySelector('#foreground')
saveLincolnButton.addEventListener('click', function saveLincolnHandler(event) {
  const saveLincolnDiv = event.target.parentNode
  const saveLincolnInput = saveLincolnDiv.querySelector('#interval')
  const saveLincolnNumValue = parseInt(saveLincolnInput.value)

const fadeEffect = setInterval(function (){
  if (!saveZombieLincoln.style.opacity) {
    saveZombieLincoln.style.opacity = 1
  }
  if (saveZombieLincoln.style.opacity > 0) {
    saveZombieLincoln.style.opacity -= 0.1
    console.log(saveZombieLincoln.style.opacity)
  } else {
    clearInterval(fadeEffect)
  }
}, saveLincolnNumValue)
})
