import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { SkillsData } from './utils';
import { v4 as uuidv4 } from 'uuid';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import {Line} from 'rc-progress';
import './style.scss';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
    <PageHeaderContent
    headerText = "My Skills"
    icon = {<BsInfoCircleFill size={40}/>}
    />
    <div className='skills__content-wrapper'>
     {
      SkillsData.map((items)=>(
        <div key={uuidv4()} className='skills__content-wrapper__inner-content'>
        <Animate
        play
        duration={1}
        delay={0.3}
        start={{
          transform: 'translateX(-200px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
        >
          <h3 className='skills__content-wrapper__inner-content__category-text'>{items.label}</h3>
         <div className='skills__content-wrapper__inner-content__progressbar-container'>
          {
            items.data.map((skillItem)=>(
              <AnimateKeyframes
              play
              duration={1}
              keyframes={["opacity : 1","opacity : 0"]}
              iterationCount="1"
              >
              <div key={uuidv4()} className='progressbar-wrapper'>
                <p>{skillItem.skillName}</p>
                <Line
                percent={skillItem.percentage}
                strokeWidth='2'
                strokeColor= 'var(--gold-theme-main-color)'
                trailWidth='2'
                strokeLinecap='square'
                />

              </div>

              </AnimateKeyframes>
            ))
          }
         </div>
        </Animate>
        </div>
      ))
     }
    </div>
   </section>
  )
}

export default Skills;