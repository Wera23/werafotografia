import { useState, useEffect } from "react"

export const useDisplayNameScroll = () => {
  const [isDisplayName, setDisplayName] = useState(false)

  const displayNameScroll = () => {
    if (window.scrollY > 100) {
      return setDisplayName(true)
    } else return setDisplayName(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", displayNameScroll)
    return () => window.removeEventListener("scroll", displayNameScroll)
  })

  return isDisplayName
}
