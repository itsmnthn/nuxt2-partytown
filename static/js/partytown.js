// eslint-disable-next-line no-unused-vars
const partytown = {
  debug: true,
  forward: ['dataLayer.push'],
}

window.dataLayer = window.dataLayer || []
function gtag() {
  window.dataLayer.push(arguments)
}

gtag({ event: 'pageView', page_path: window.location.pathname })
gtag({ event: 'forwardedEvent' })
