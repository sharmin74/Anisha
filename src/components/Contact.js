import React from 'react'
import './Contact.css'
import Button from '@material-ui/core/Button';

function Contact() {
    return (
        <div id='contact'>
            {/* <div className='contact'> */}
                <h1>Contact me</h1>
                <p>If you think that I can help you in any way possible, fell free to contact me. I will reach back to you as soon as possible. </p>
            {/* </div> */}
            <br/>
            <Button style={{backgroundColor:'bisque', color: 'black'}} variant="contained" color="primary">
                Message me 
            </Button>
        </div>
    )
}

export default Contact
