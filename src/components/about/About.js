import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Mohamed Amine BOUSBIBIT{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I am currently a first-year Master's student in IT Security and Big Data at the Faculty of Sciences and Techniques of Tanger
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Passionate about engaging projects, I am particularly interested in computer science and motivated by analytical challenges.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'exercising',
                    'solving complex problems',
                    'skiing',
                    'fixing hard-to-fix bugs',
                    'trying new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
          I have strong problem-solving skills and am actively seeking opportunities to contribute proactively to innovative academic projects.{' '}
           
            </p>
            <div className="location-wrapper">
            
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
