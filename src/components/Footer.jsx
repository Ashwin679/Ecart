import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className='py-10 md:px-20 px-10 bg-purple-900 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white   '>

                <div>
                    <h2 className='text-3xl font-bold'><FontAwesomeIcon icon={faCartShopping} className="me-3" />E-CART</h2>
                    <p className='mt-6 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, molestiae perspiciatis exercitationem quidem harum earum necessitatibus quam modi labore enim officiis. Iure sequi facere veritatis quaerat facilis deleniti magnam ducimus.</p>
                </div>
                <div className='md:flex justify-center mt-10 md:mt-0'>
                    <div>
                        <h3 className='text-3xl font-bold'>LINKS</h3>
                        <Link to={'/'}>  <p className='mt-6'>Home</p></Link>
                        <Link to={'/wishlist'}>  <p className='mt-3'>Wishlist</p></Link>
                        <Link to={'/cart'}>  <p className='mt-3'>Cart</p></Link>
                    </div>
                </div>

                <div className='md:flex justify-center mt-10 md:mt-0'>
                    <div>
                        <h3 className='text-3xl font-bold'>GUIDES</h3>
                        <p className='mt-6'>React</p>
                        <p className='mt-3'>React Bootstrap</p>
                        <p className='mt-3'>Bootswatch</p>
                    </div>


                </div>
                <div className='px-10'>
                    <h3 className='text-3xl font-bold'>CONTACT US</h3>
                    <div className='flex mt-6'>
                        <input type="text" placeholder='Email id' className='p-3 rounded w-full' />
                        <button className='p-3 bg-orange-600 ms-3 rounded'>Subscribe</button>

                    </div>
                    <div className='flex justify-between mt-6'>
                        <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
                        <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl' />
                        <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
                        <FontAwesomeIcon icon={faInstagram} className='text-3xl' />

                    </div>
                </div>



            </div>

        </>
    )
}

export default Footer