import './contactform.css'
import React, {useState} from 'react';
function Contactform(){
const[clicked, setClicked] = useState(false)

const onClicktrueHandler = () => {   
setClicked(true)
    }

    const onClickfalseHandler = () => {   
        setClicked(false)
            }
        






    if(clicked !=true)
    return (<div className='contact-form-wrapper'>
        <div className='contact-form-headings'>
        <span className='contact-form-entry-text'>You have a question for us? Our operators are waiting for you...</span>
        <span className='contact-form-title'>Contact us</span>
        </div>
        <div className='contact-form-input-fields'>
            <label className='contact-form-label' for='1'>Your email:</label>
            <input id='1' type='email' placeholder='kedef@example.com'></input>
            <label className='contact-form-label'>Your message</label>
            <textarea className='contact-form-textarea' placeholder='hello im looking'></textarea>

        </div>
        <button className='contact-form-submit-button' onClick={onClicktrueHandler}>send email</button>
        </div>)
    else{
        return <button className='button' onClick={onClickfalseHandler} >DONT CLICK</button>
    }
}   
export default Contactform