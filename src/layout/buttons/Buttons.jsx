import React from 'react'
import MyButton from '../../components/UI/button/MyButton'

function Buttons() {
  return (
    <article className='buttons'>
        <h2 className="getToIt">Let`s get to it</h2>
        <MyButton className="">Start your design</MyButton>
        <MyButton className="">Browse all products</MyButton>
    </article>
  )
}

export default Buttons