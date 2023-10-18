import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate'
import './style.scss';

const Home = () => {

  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage = ()=>{

    navigate('/contact') //to navigate to contact me when the button is clicked

  }
  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Joy
          <br />
          Frontend Engineer
        </h1>
        </div>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateY(550px)' 
        }}
        end={{
          transform : 'translateX(0px)' 
        }}
        >
        <div className='home__contact-me'>
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
        </Animate>
    </section>
  )
}

export default Home;