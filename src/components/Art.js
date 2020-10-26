import React from 'react'
import c1 from './pics/c1.jpg'
import c2 from './pics/c2.jpg'

function Art() {
    return (
        <div>
            <div className='art'>
                <div>
                    <img className='art__img' src={c1} alt=""/>
                </div>
                <div>
                    <img className='art__img' src={c2} alt=""/>
                </div>
                <div>
                    <img className='art__img' src={c2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Art
