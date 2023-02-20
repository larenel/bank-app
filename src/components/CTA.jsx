import React from 'react'
import s from '../s'
import Button from './Button'

const CTA = () => (
  <section
    className={`${s.flexCenter} ${s.marginY} ${s.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${s.heading2}`}>Lets try our service now</h2>
      <p className={`${s.paragraph} max-w-[470-px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto
        nam iste modi dolor laboriosam?
      </p>
    </div>
    <div className={`${s.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA
