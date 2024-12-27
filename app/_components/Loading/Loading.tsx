import React from 'react'
interface loadingProps {
  title: string
}

function LoadingButton({ title }: loadingProps) {
  return (
    <button
      className="bg-slate-600 flex items-center text-white px-8 py-2 mt-4 rounded-[25px]"
      disabled
    >
      <svg className="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
      </svg>
      <span className="ml-2">{title}</span>
    </button>
  )
}

export default LoadingButton
