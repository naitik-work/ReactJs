import React from 'react'

import '../styles/About.css'

const About = () => {
  return (
      <section className="about">
      <div className="about-text">
        <h2>About Horizon</h2>
        <p>
          At Horizon, we don't just play tennis — we live it.  
          Since 2021, our club has been a home for players of all levels,  
          from eager beginners to seasoned pros.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <h3>Professional Hard Courts</h3>
          <p>
            Tournament-grade lighting and climate control —  
            play in perfect conditions, in any season.
          </p>
        </div>

        <div className="card">
          <h3>Private & Group Lessons</h3>
          <p>
            Personalized training plans led by certified coaches  
            to boost your performance.
          </p>
        </div>
      </div>
    </section>
  );

}

export default About;
