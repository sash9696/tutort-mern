import React from 'react'
import Menu from './Menu'

function Navigation() {
  return (
    <div className='topbar-container'>
        <div className='indices-container'>
            <div className='nifty'>
                <p className='index'>NIFTY 50</p>
                <p className='index-points'>143.2</p>

            </div>
            <div className='sensex'>
                <p className='index'>SENSEX</p>
                <p className='index-points'>123.2</p>
                <p className='percentage'></p>

            </div>
        </div>

        <Menu />
        
    </div>
  )
}

export default Navigation