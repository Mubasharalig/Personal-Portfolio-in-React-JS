import React from 'react'
import Common from '../component/Common'
import Mypic8 from '../images/mypic9.jpg'

export default function Home() {
  return (
    <><section className='header'>
    <Common name='Grow your Business with' btnText='Get Started' web='/service' headerImage={Mypic8} />
    </section>
    </>
  )
}
