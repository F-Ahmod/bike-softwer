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
        <div class="row bg-secondary">
            <div class="col-md-6 " data-aos="fade-right">
                <h2 class="text-secondary mt-3 mb-3">Please Call</h2>
                <p class="text-light">+173894489</p>
                <p class="text-light"> +64684748</p>
            </div>
            <div class="col-md-6" data-aos="fade-left">
                <h2 class="text-secondary mt-3 mb-3">Email </h2>
                <p class="text-light">pjclub@gmail.com</p>
                <p class="text-light">pjclubinfo@hub.com</p>
                
            </div> 
            
            
        </div>
    );
};

export default Contact;