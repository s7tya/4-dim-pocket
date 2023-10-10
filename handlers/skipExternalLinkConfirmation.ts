
export const skipExternalLinkConfirmation = () => {
  const confirmationRegex = /(.*\/)link_iframe_balloon\?url=(.*)/

  const links = document.querySelectorAll("a")
  for (const link of links) {
    const match = link.href.match(confirmationRegex)

    if (match && match.length == 3) {
      const url = decodeURIComponent(match[2])

      const createdAnchor = document.createElement("a")
      createdAnchor.textContent = url
      createdAnchor.href = url
      createdAnchor.target = "_blank"
      createdAnchor.rel = "noreferrer noopener"

      link.parentNode.appendChild(createdAnchor)
      link.remove()
    }
  }
}