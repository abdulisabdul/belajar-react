import React from 'react'

export default function Header(props) {
    return (
      <div>
        Ini Header
        <div>
          Ini sub header -- {props.subHeader}
        </div>
  
      </div>
    )
  }
