import React, { ReactNode, useEffect } from 'react'
import { clsx } from 'clsx'

const openClassNames = {
  right: 'translate-x-0',
  left: 'translate-x-0',
  top: 'translate-y-0',
  bottom: 'translate-y-0'
}

const closeClassNames = {
  right: 'translate-x-full',
  left: '-translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full'
}

const classNames = {
  right: 'inset-y-0 right-0',
  left: 'inset-y-0 left-0',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0'
}

interface DrawerProps {
  open: boolean
  onClose: () => void
  side?: 'right' | 'left' | 'top' | 'bottom'
  children: ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, side = 'right', children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])
  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={clsx('fixed inset-0 bg-gray-500 bg-opacity-75 transition-all z-[999]', {
          'opacity-100 duration-500 ease-in-out visible ': open,
          'opacity-0 duration-500 ease-in-out invisible': !open
        })}
      ></div>
      <div className={clsx({ 'fixed z-[999] inset-0 overflow-hidden': open })}>
        <div className="absolute z-[999] inset-0 overflow-hidden">
          <div className={clsx('z-[999] pointer-events-none fixed max-w-full', classNames[side])}>
            <div
              className={clsx(
                'pointer-events-auto w-full h-full transform transition ease-in-out duration-500',
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open }
              )}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
