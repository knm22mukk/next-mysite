import { useEffect, useState } from "react"

export const ReturnTopButton = () => {

  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none'
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s'
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return(
    <button 
      onClick={returnTop}
      className="px-6 py-2 my-3 text-sm font-bold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
      style={style}
    >
      トップに戻る
    </button>
  )
}