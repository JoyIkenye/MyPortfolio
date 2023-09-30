import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss';
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';



const personalDetails =[
  {
    label: "Name",
    value: "Joy Jessica Ikenye",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Lagos, Nigeria",
  },
  {
    label: "Email",
    value: "ikenyejessica@gmail.com",
  },
  {
    label: "Contact No",
    value: "08080834653",
  }
]

const jobSummary = "A Frontend Developer with 3 months experience in blending the art of design with skill of programming to deliver engaging user experience through efficient website development. Very passionate about translating design mockups and wireframes into responsive, interactive, and accessible user interfaces. Demonstrating willingness to learn and grow as a front-end developer, seeking guidance and mentorship from experienced team members"

const About = () => {
  return (
   <section id='about' className='about'>

    <PageHeaderContent
    headerText = "About Me"
    icon = {<BsInfoCircleFill size={40}/>}
    />

    <div className='about__content'>
      <div className='about__content__personalWrapper'>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateX(-900px)' 
        }}
        end={{
          transform : 'translateX(0px)' 
        }}
        >
      <h3>Frontend Developer</h3>
      <p>{jobSummary}</p>
      </Animate>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateX(500px)' 
        }}
        end={{
          transform : 'translateX(0px)' 
        }}
        >
      <h3 className='personalInfomationHeaderText'>Personal Infomation</h3>
      <ul>
        {
          personalDetails.map((item,index)=>(
            <li key={index}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
        }
      </ul>
      </Animate>
      </div>
      <div className='about__content__servicesWrapper'>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateX(600px)' 
        }}
        end={{
          transform : 'translateX(0px)' 
        }}
        >
        <div className='about__content__servicesWrapper__innerContent'>
        <div>
          <FaDev size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <DiAndroid size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <FaDatabase size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <DiApple size={60} color='var(--gold-theme-main-color)'/>
        </div>
        </div>
        </Animate> 
      </div>
    </div>
   </section>
  )
}

export default About;