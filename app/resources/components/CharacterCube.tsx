import React, { Children, FC, ReactComponentElement, ReactElement, ReactHTMLElement, ReactNode } from 'react'

interface charcterInterface {
    children: ReactNode;
    styles: string;
}

export const CharacterCube:FC<charcterInterface> = ({children, styles}) => {
  return (
    <div className={`${styles} rounded-md p-6`} >
        {children}
    </div>
  )
}
