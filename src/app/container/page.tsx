import React from 'react'
import Navbar from './components/navbar'
import Content from './components/content'
import AboutPage from '../about/page'
import ContactPage from '../contact/page'


export default function Mainpage() {
  return (
    <div>
      <Navbar/>
     <div className='mt-[10%]'>

         <Content />
     </div>

     <AboutPage/>
     <ContactPage/>
    </div>
  )
}
