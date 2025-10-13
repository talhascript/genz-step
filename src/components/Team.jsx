import './Team.css'
import rifatImage from '../assets/1.jpg'
import tanvirImage from '../assets/2.jpg'
import { useEffect, useRef } from 'react'

const Team = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all animatable elements
    const elements = document.querySelectorAll('.team-card.animate-on-scroll')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Our Team</h2>
        <div className="team-grid">
          <div className="team-card animate-on-scroll">
            <div className="team-image">
              <img src={rifatImage} alt="Rifat Shaon" />
            </div>
            <div className="team-info">
              <h3>Rifat Shaon</h3>
              <p className="team-education">Studied at University of Dhaka</p>
              <p className="team-recognition">Recognised at The youngest Traveller of Bangladesh</p>
            </div>
          </div>
          
          <div className="team-card animate-on-scroll">
            <div className="team-image">
              <img src={tanvirImage} alt="Tanvir Raihan" />
            </div>
            <div className="team-info">
              <h3>Tanvir Raihan</h3>
              <p className="team-education">Former student University of Dhaka</p>
              <p className="team-recognition">Studies Information Technology at City University Malaysia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team