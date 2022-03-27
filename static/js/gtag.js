// gtag implementation
// https://developers.google.com/analytics/devguides/collection/gtagjs/

;(function () {
  // Add script to the head
  const script = document.createElement('script')
  script.async = true
  script.type = 'text/partytown'
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-21NM1T1TEG'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'G-21NM1T1TEG')
})()
