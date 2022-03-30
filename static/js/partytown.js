history.pushState = ((f) =>
  function pushState() {
    const ret = f.apply(this, arguments)
    window.dispatchEvent(new Event('pushstate'))
    window.dispatchEvent(new Event('locationChange'))
    return ret
  })(history.pushState)

history.replaceState = ((f) =>
  function replaceState() {
    const ret = f.apply(this, arguments)
    window.dispatchEvent(new Event('replacestate'))
    window.dispatchEvent(new Event('locationChange'))
    return ret
  })(history.replaceState)

window.addEventListener('popstate', () => {
  window.dispatchEvent(new Event('locationChange'))
})

window.addEventListener('locationChange', function () {
  console.log('location changed!', window.location)
  let input = document.getElementById('hiddenLocationInput')
  if (!input) {
    input = document.createElement('input')
    input.type = 'hidden'
    input.id = 'hiddenLocationInput'
    input.name = 'hiddenLocationInput'
    input.onchange = (e) => {
      console.log('🚀 ~ file: partytown.js ~ line 30 ~ e', e)
      if (!window.dataLayer) window.dataLayer = []
      window.dataLayer.push(['pageView', input.value])
    }
  }
  document.body.appendChild(input)
  input.value = window.location.pathname
  input.dispatchEvent(new Event('change'))
})

// eslint-disable-next-line no-undef
partytown = `partytown = {
  debug: true,
  forward: ['dataLayer.push'],
  logCalls: true,
  logGetters: true,
  logSetters: true,
  logImageRequests: true,
  logMainAccess: true,
  logSendBeaconRequests: true,
  logStackTraces: false,
  logScriptExecution: true,
}`

const firstScript = document.getElementsByTagName('script')[0]
const partytownScript = document.createElement('script')
// eslint-disable-next-line no-undef
partytownScript.innerHTML = partytown
partytownScript.id = 'partytown-config'
firstScript.parentNode.insertBefore(partytownScript, firstScript)
