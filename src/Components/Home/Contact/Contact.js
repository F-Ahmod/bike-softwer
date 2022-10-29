import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (
        <div className="row bg-secondary">
            <div className="col-md-6 " data-aos="fade-right">
                <h2 className="text-secondary mt-3 mb-3">Please Call</h2>
                <p className="text-light">+173894489</p>
                <p className="text-light"> +64684748</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <h2 className="text-secondary mt-3 mb-3">Email </h2>
                <p className="text-light">pjclub@gmail.com</p>
                <p className="text-light">pjclubinfo@hub.com</p>
                
            </div> 
            
            
        </div>
    );
};

export default Contact;