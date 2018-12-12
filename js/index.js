// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const interval = document.querySelector('#interval')
const saveLincoln = document.querySelector('#save_lincoln')
const zombieImage = document.querySelector('#foreground')
const hiddenMessage = document.querySelector('#hidden-message')

 saveLincoln.addEventListener('click', function(event) {
  let intervalValue
  isNaN(interval.value) ? intervalValue = 10000 : intervalValue = interval.value;
  zombieImage.style.cssText = `position: absolute; top: 70px; left: 110px; opacity: 0; transition: ${intervalValue}ms`
  hiddenMessage.style.cssText = `position: relative; display: block; font-family: Optima, ‘Lucida Grande’;`
})
