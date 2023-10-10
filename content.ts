
const skipExternalLinkConfirmation = () => {
  const confirmationRegex = /(.*\/)link_iframe_balloon\?url=(.*)/

  const links = document.querySelectorAll("a")
  for (const link of links) {
    const match = link.href.match(confirmationRegex)

    if (match && match.length == 3) {
      const createdAnchor = document.createElement("a")
      const url = decodeURIComponent(match[2])
      createdAnchor.textContent = url
      createdAnchor.href = url
      link.parentNode.appendChild(createdAnchor)
      link.remove()
    }
  }
}

const colorizeAssignments = () => {

}

skipExternalLinkConfirmation()