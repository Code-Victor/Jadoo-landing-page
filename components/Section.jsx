import React from 'react'

const Section = ({title,headText,children,className='',textAlign='center'}) => {
  let align=`text-${textAlign}`
  return (
    <section className={className}>
        <h3 className={'md:text-xl font-bold text-[#5E6282] ' +align}>{title}</h3>
        <h1 className={'text-4xl md:text-5xl font-serif capitalize font-bold ' +align}>{headText}</h1>
        {children}
    </section>
  )
}

export default Section