import React from 'react'
export default function Home() {
    const socialMedia = [
        { name: 'facebook', iconClass: 'fa-facebook-f' },
        { name: 'twitter', iconClass: 'fa-twitter' },
        { name: 'instagram', iconClass: 'fa-instagram' },
        { name: 'linkedin', iconClass: 'fa-linkedin' }
    ];
    return (<>
        <div className='Home_content' id='Home'>

            <div className='text text-center'>
                <p>BECOME A PART OF THE
                    <span className="fade-text">  AMAZING </span>
                </p>
                <p>GALAXY WORLD</p>
            </div>
            <div className='text-center '>
                <p className='description'>
                    Welcome to Explore the Cosmos, your ultimate destination for all things space! Whether you're an avid astronomer, a curious student, or simply fascinated by the wonders of the universe, our website offers a wealth of information and resources to fuel your passion for space exploration
                </p>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <button className='btn  rounded-4'> Begin Your Journey</button>

            </div>

            <div className="social mt-5 d-flex justify-content-center mb-5">
            {socialMedia.map((platform, index) => (
                <div
                    key={index}
                    className="social_icon rounded-circle d-flex justify-content-center align-items-center"
                >
                    <i className={`fa-brands ${platform.iconClass} text-center`}></i>
                </div>
            ))}
        </div>

        </div>
    </>
    )
}
