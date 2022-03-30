// gtag implementation
// https://developers.google.com/analytics/devguides/collection/gtagjs/

const gtagScript = `;(function (window, document, id, data = 'dataLayer') {
  const firstScript = document.getElementsByTagName('script')[0]
  const gtmScript = document.createElement('script')
  const dataLayer = '&l=' + data
  gtmScript.async = true
  gtmScript.src =
    'https://www.googletagmanager.com/gtag/js?id=' + id + dataLayer
  firstScript.parentNode.insertBefore(gtmScript, firstScript)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    console.log("🚀 ~ file: gtag.js ~ line 16 ~ gtag ~ arguments", arguments)
    window.dataLayer.push(arguments)
    console.log("🚀 ~ file: gtag.js ~ line 17 ~ gtag ~ window.dataLayer", window.dataLayer)
  }
  gtag('js', new Date())

  gtag('config', id, { debug_mode: true })

  let input = document.getElementById('hiddenLocationInput')
  console.log("🚀 ~ file: gtag.js ~ line 22 ~ input", input)
  input.onchange = function (e) {
    console.log("🚀 ~ file: gtag.js ~ line 24 ~ e", e)
    console.log("🚀 ~ file: gtag.js ~ line 24 ~ input.value", input.value)
    gtag('pageView', input.value)
  }

})(window, document, 'x-xxxxxxx')


`

const fScript = document.getElementsByTagName('script')[0]
const gtmScript = document.createElement('script')
gtmScript.innerHTML = gtagScript
gtmScript.id = 'gtag'
gtmScript.type = 'text/partytown'
fScript.parentNode.insertBefore(gtmScript, fScript)
