import {
  useCallback,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
} from 'react'

const useDocumentEvent = (events) => {
  useEffect(() => {
    events.forEach((event) => {
      document.addEventListener(event.type, event.callback)
    })
    return () =>
      events.forEach((event) => {
        document.removeEventListener(event.type, event.callback)
      })
  }, [events])
}

export const useDropdown = (initialState = false, onAfterClose = null) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(initialState)

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return
      }
      setIsOpen(false)
      onAfterClose?.()
    },
    [ref, onAfterClose]
  )

  const handleHideDropdown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        onAfterClose?.()
      }
    },
    [onAfterClose]
  )

  useDocumentEvent([
    { type: 'click', callback: handleClickOutside },
    { type: 'keydown', callback: handleHideDropdown },
  ])

  return [ref, isOpen, setIsOpen]
}
