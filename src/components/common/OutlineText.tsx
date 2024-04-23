import React from 'react'

function OutlineText(props:{children:React.ReactNode,className?:string}) {
  return (
    <>
        <div className={`${props.className} -z-10 absolute w-full h-full top-0 left-0`}>
            {props.children}
        </div>
        <div className={`${props.className} outline-text z-10 absolute w-full h-full top-0 left-0`}>
            {props.children}
        </div>
    </>
  )
}

export default OutlineText