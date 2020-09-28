import * as React from 'react';

interface IProps {
  logo?: string
  className?: string
  alt?: string
}

const  Img = (props : IProps) => {
    const { logo, className, alt } = props

    return (
        <img src={logo} className={className} alt={alt} />
    )
}

export default Img