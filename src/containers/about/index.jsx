import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './style.scss';
import {FaReact,  FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';



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
    value: "09163646952",
  }
]

const jobSummary = "Skilled Frontend Engineer specializing in designing and developing responsive and user-friendly web interfaces. Proficient in modern web technologies including HTML, CSS, JavaScript, and various Frontend frameworks such as ReactJs. Collaborative team player dedicated to delivering high-quality, performance driven web applications."

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
          <FaReact size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <FaHtml5 size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <IoLogoJavascript size={60} color='var(--gold-theme-main-color)'/>
        </div>
        <div>
        <FaCss3Alt size={60} color='var(--gold-theme-main-color)'/>
        </div>
        </div>
        </Animate> 
      </div>
    </div>
   </section>
  )
}

export default About;