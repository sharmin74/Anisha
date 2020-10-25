import React from 'react'
import './Work.css'
import img from './pics/3.jpg';
import cartoon from './pics/c2.jpg';
import Button from '@material-ui/core/Button';

function Work() {
    return (
        <div id='work'>
             <h1>My work</h1>
            <div className='work'>
                <div className='art'>
                    <div>
                        <img className='work__img1' src={img} alt="photography"/>
                    </div>
                    <br/>
                    <div>
                        <Button style={{backgroundColor:'bisque', color: 'black'}} variant="contained" color="primary">
                            Explore my Gallery
                        </Button>
                    </div>
                </div>
                <div className='photography'>
                    <div>
                        <img className='work__img2' src={cartoon} alt="digital art"/>
                    </div>
                    <br/>
                    <div>
                        <Button style={{backgroundColor:'bisque', color: 'black'}} variant="contained" color="primary">
                            See my Art
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
