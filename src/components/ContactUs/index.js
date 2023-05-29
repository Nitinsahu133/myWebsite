import { Component } from 'react'
import contactUsImage from '../../assests/contactUsImage.png'
import './index.css'

class ContactUs extends Component {
    state = {}

    render() {
        return (
            <div className='contact-us-main-container'>
                <img className='contact-us-image' src={contactUsImage} alt="contact us" />
                <div className='contact-us-element-container'>
                    <div>
                        <div className='contact-us-corporate-office-address-card'>
                            <div>
                                <h1 className='contact-us-corporate-office-address-heading'>Corporate Office</h1>
                                <p className='contact-us-corporate-office-address'>Harihar singh Road,<br />Ranchi-834008<br />Jharkhand</p>
                            </div>
                        </div>
                        <div className='contact-us-corporate-office-address-card'>
                            <div>
                                <h1 className='contact-us-corporate-office-address-heading'>Corporate Office</h1>
                                <p className='contact-us-corporate-office-address'>Harihar singh Road,<br />Ranchi-834008<br />Jharkhand</p>
                            </div>
                        </div>
                    </div>
                    <form className='contact-us-form'>
                        <h1>Contact us</h1>
                        <input className='contact-us-input-element' type='text' placeholder='Name' />
                        <input className='contact-us-input-element' type='text' placeholder='Email' />
                        <input className='contact-us-input-element' type='text' placeholder='Mobile' />
                        <input className='contact-us-input-element' type='text' placeholder='Subject' />
                        <select className='contact-us-whome-to-contact-dropdown'>
                            <option>Whome to contact -</option>
                            <option>Proccurement</option>
                            <option>Contract</option>
                            <option>Human Resource</option>
                            <option>Other</option>
                        </select>
                        <textarea className='contact-us-textarea-element' type="text" placeholder='Message' />
                        <button className='contact-us-send-button' type='submit'>SEND</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs