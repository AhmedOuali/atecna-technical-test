import React, { FunctionComponent } from 'react'
import './appLayout.css'

const AppLayout: FunctionComponent = (props) => {
  const {children} = props
  return (
    <div>
      <div className=" bg-gradient-to-r from-blue-800 to-gray-800 p-4 shadow text-2xl text-white">
        <h3 className="font-bold pl-2 items-center text-center text-4xl">Atecna (Twitch dashboard)</h3>
      </div>
      <main className="w-full flex-wrap sm:p-1.5 md:p-6 bg-gray-100">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
