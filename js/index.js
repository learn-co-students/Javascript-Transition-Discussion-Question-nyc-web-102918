// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
document.addEventListener("DOMContentLoaded", () => {
  const zombie = document.querySelector('#foreground')
  const submit = document.querySelector('#save_lincoln')

  submit.addEventListener('click', function (event) {
    event.preventDefault()
    // console.log(event.target)

    const timer = document.querySelector('#interval').value

    var delayInMilliseconds = 1000; //1 second

    // setTimeout(function() {
    // }, if timer !== nill
    //   parseInt(timer)
    //   else
    // delayInMilliseconds
    //     );
        zombie.fadeOut(parseInt(timer))
        //I gave it the ole college try but I'm giving up at this point
        //because I have a pair program to get to now..
  })
});
