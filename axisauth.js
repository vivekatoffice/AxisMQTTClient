// force auth
const authorize = async host => {
  // Force a login by fetching usergroup
  const fetchOptions = {
    credentials: 'include',
    headers: {
      'Axis-Orig-Sw': true,
      'X-Requested-With': 'XMLHttpRequest',
    },
    mode: 'no-cors',
  }
  try {
    await window.fetch(`http://${host}/axis-cgi/usergroup.cgi`, fetchOptions)
  } catch (err) {
    console.error(err)
  }
}




// Each time a device ip is entered, authorize and then play
const playButton = document.querySelector('#play')
playButton.addEventListener('click', async e => {
  const device = document.querySelector('#imagepreview')
  device.src="";
  const host ="192.168.50.14";
  await authorize(host)
  console.log("Authorisation completed")
  //http://192.168.50.14/axis-cgi/bitmap/image.bmp
  
  //device.src="http://192.168.50.14/axis-cgi/bitmap/image.bmp"
  device.src="http://192.168.50.14//axis-cgi/mjpg/video.cgi?fps=5"
  console.log("Check image now")
})



