var injected = false;

function generatePopup(r) {

  injected = true;

  elem = document.createElement('div')
  elem.id = 'onexxx0'
  elem.style.zIndex = 4000;
  elem.style.color = 'white'
  elem.style.paddingTop = '25px'
  elem.style.textAlign = 'center'
  elem.style.opacity = 0.83
  elem.style.background =  '#616161'
  elem.style.position = 'fixed'
  elem.style.width = '100%'
  elem.style.height =' 100%'
  elem.style.top = 0
  elem.style.left = 0
  document.body.appendChild(elem)

  message = document.createElement('div')
  message.id = 'onexxx1'
  message.style.color = 'white'
  message.style.paddingTop = '125px'
  message.style.textAlign = 'center'
  message.style.backgroundColor = 'rgba(0,0,0,0.83)'
  message.style.position = 'fixed'
  message.style.zIndex = 4504
  message.style.width = '100%'
  message.style.height = '100%'
  message.style.top = 0
  message.style.left = 0
  message.textContent = `This website has been found to contain harassing material, are you sure you want to continue?`
  document.body.appendChild(message)

  yesButton = document.createElement('div')
  yesButton.id = "onexxx2"
  yesButton.textContent = 'Yes'
  yesButton.style.zIndex = 5000;
  yesButton.style.cursor = 'pointer'
  yesButton.style.borderRadius = '7px'
  yesButton.style.textAlign = 'center'
  yesButton.style.backgroundColor = 'darkred'
  yesButton.style.color = 'white'
  yesButton.style.position = 'fixed'
  yesButton.style.width = '200px'
  yesButton.style.fontSize = '56px'
  yesButton.style.lineHeight = '145px'
  yesButton.style.height = '145px'
  yesButton.style.top = '50%'
  yesButton.style.left = '20%'
  document.body.appendChild(yesButton)

  noButton = document.createElement('div')
  noButton.id = 'onexxx3'
  noButton.textContent = 'No'
  noButton.style.zIndex = 5000;
  noButton.style.cursor = 'pointer'
  noButton.style.borderRadius = '7px'
  noButton.style.textAlign = 'center'
  noButton.style.backgroundColor = 'darkred'
  noButton.style.color = 'white'
  noButton.style.position = 'fixed'
  noButton.style.width = '200px'
  noButton.style.fontSize = '56px'
  noButton.style.lineHeight = '145px'
  noButton.style.height = '145px'
  noButton.style.top = '50%'
  noButton.style.right = '20%'
  document.body.appendChild(noButton)

  document.body.innerHTML += '<style>.hide{display: none !important;}'
}

// function generateRatingsBar(r) {
//   back = document.createElement('div')
//   back.id = 'ratingId'
//   back.style.position = 'fixed'
//   back.style.width = '5em'
//   back.style.height = '2em'
//   back.style.backgroundColor = '#ff0000'
//   document.body.appendChild(back)

//   document.body.innerHTML += '<style>#ratingId{display: flex;align-items: center;justify-content: center;}' +
//                               '.rating {content: "✩"; font-size: 2em; color: #fff;}</style>'

//   r1 = document.createElement('div')
//   r1.className += ' rating'
//   r2 = document.createElement('div')
//   r2.className += ' rating'
//   r3 = document.createElement('div')
//   r3.className += ' rating'
//   r4 = document.createElement('div')
//   r4.className += ' rating'
//   r5 = document.createElement('div')
//   r5.className += ' rating'

//   document.getElementById('ratingId').appendChild(r1)
//   document.getElementById('ratingId').appendChild(r2)
//   document.getElementById('ratingId').appendChild(r3)
//   document.getElementById('ratingId').appendChild(r4)
//   document.getElementById('ratingId').appendChild(r5)
// }

//fetch('https://10.183.6.127/api/analyze?url=' + window.location.href.toString(), {
 // method: 'GET',
 // mode: 'cors',
//  redirect: 'follow',
//}).then(function (responseObj) {
 // return responseObj.json()
//}).then(function (r) {
 // let negativity = r.analysis.negativity
 let negativity = -50;
  if (negativity < 0) {
    let unblocked = false
    if (localStorage && !localStorage['unblocked'])
      //generatePopup(r)
      generatePopup()

    function hide_popup(e) {
      if(injected == true) {
        document.getElementById('onexxx0').className += ' hide'
        document.getElementById('onexxx1').className += ' hide'
        document.getElementById('onexxx2').className += ' hide'
        document.getElementById('onexxx3').className += ' hide'
        localStorage.setItem('unblocked', true)
        return false;
      }
    }

    function go_back() {
      window.history.back()
    }
    if(injected == true) {
      document.getElementById("onexxx2").onclick = hide_popup
      document.getElementById("onexxx3").onclick = go_back
    }
  }
//})
