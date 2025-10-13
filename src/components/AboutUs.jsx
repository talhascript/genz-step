import './AboutUs.css'
import { useState, useEffect } from 'react'
import klImage from '../assets/KL.png'
import ausImage from '../assets/aus.jpg'
import ausImage2 from '../assets/aus.jpg'
import Team from './Team'

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [klImage, ausImage, ausImage2]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Study in Malaysia & Australia — Your Overseas Education Partner</h1>
          <p>GenZ Step: Trusted overseas education consultancy guiding you step by step</p>
          <a 
            href="https://wa.me/60175994407?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20GenZ%20Step%27s%20services.%20Can%20you%20help%20me%3F" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <section className="services-section">
        <div className="container">
          <h2>Higher education abroad</h2>
          <p>Explore education abroad in top destinations with excellent standards and growing reputation</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>A team of professionals and educated service</h3>
              <p>Expert guidance from experienced education consultants with proven track records.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Head office in Malaysia and branch in Australia</h3>
              <p>Strategic locations to better serve our students across multiple regions.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Partnership with universities in Australia and Malaysia</h3>
              <p>Direct connections with top institutions for seamless admissions.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Cooperation with ministries of education</h3>
              <p>Official partnerships ensuring quality and accredited programs.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>Full support and guidance for our students</h3>
              <p>Comprehensive assistance from application to graduation and beyond.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Saving your time and budget</h3>
              <p>Efficient processes and cost-effective solutions for your education journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="destination-card malaysia">
          <div className="destination-content">
            <h2>Education in Malaysia</h2>
            <p>Affordable excellence in the heart of Asia</p>
            <a href="/malaysia" className="destination-btn">Find Out</a>
          </div>
        </div>
        
        <div className="destination-card australia">
          <div className="destination-content">
            <h2>Education in Australia</h2>
            <p>World-renowned universities with excellent research opportunities</p>
            <a href="/australia" className="destination-btn">Find Out</a>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Our University Partners</h2>
          <div className="universities-grid">
            {/* Featured Partners - Top Priority */}
            <div className="university-card highlighted">
              <div className="university-name">INTI International University</div>
              <div className="university-badge">Featured Partner</div>
              <div className="university-info">
                <p>The only Malaysian institution to receive the 'Rising Star' award in QS World University Rankings 2025. Excellence in business, engineering, and IT programs.</p>
                <div className="university-highlights">
                  <span className="highlight">QS Rising Star Award</span>
                  <span className="highlight">Top Private University</span>
                </div>
              </div>
            </div>

            <div className="university-card highlighted">
              <div className="university-name">SEGi University</div>
              <div className="university-badge">Featured Partner</div>
              <div className="university-info">
                <p>A prestigious private university founded in 1977, offering comprehensive programs in health sciences, business, and engineering with strong industry connections.</p>
                <div className="university-highlights">
                  <span className="highlight">Founded 1977</span>
                  <span className="highlight">Industry Partnerships</span>
                </div>
              </div>
            </div>

            <div className="university-card highlighted">
              <div className="university-name">University of Cyberjaya</div>
              <div className="university-badge">Featured Partner</div>
              <div className="university-info">
                <p>Formerly Cyberjaya University College of Medical Sciences (2005). Specializes in healthcare and technology programs with modern facilities and research focus.</p>
                <div className="university-highlights">
                  <span className="highlight">Healthcare Excellence</span>
                  <span className="highlight">Technology Focus</span>
                </div>
              </div>
            </div>

            <div className="university-card highlighted">
              <div className="university-name">City University Malaysia</div>
              <div className="university-badge">Featured Partner</div>
              <div className="university-info">
                <p>Established in 2002 and upgraded to university status in 2009. Known for business, engineering, and architecture programs with strong graduate employability.</p>
                <div className="university-highlights">
                  <span className="highlight">Business Excellence</span>
                  <span className="highlight">High Employability</span>
                </div>
              </div>
            </div>

            {/* Other Partner Universities */}
            <div className="university-card">
              <div className="university-name">APU (Asia Pacific University)</div>
              <div className="university-info">
                <p>Top-ranked private university in Malaysia, renowned for technology and innovation. Leading programs in IT, engineering, and business with international recognition.</p>
                <div className="university-highlights">
                  <span className="highlight">Technology Leader</span>
                  <span className="highlight">Innovation Hub</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">Taylor's University</div>
              <div className="university-info">
                <p>Ranked as the top private university in Malaysia and Southeast Asia. Exceptional graduate employability and strong industry partnerships across all programs.</p>
                <div className="university-highlights">
                  <span className="highlight">#1 Private University</span>
                  <span className="highlight">Top Employability</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">MAHSA University</div>
              <div className="university-info">
                <p>Private medical university founded in 2004. Offers comprehensive programs in health sciences, business, and engineering with state-of-the-art facilities.</p>
                <div className="university-highlights">
                  <span className="highlight">Medical Excellence</span>
                  <span className="highlight">Health Sciences</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">UCSI University</div>
              <div className="university-info">
                <p>Founded in 1986, ranked #265 globally in QS World University Rankings 2026. Strong programs in music, business, and engineering with international campuses.</p>
                <div className="university-highlights">
                  <span className="highlight">QS Ranked #265</span>
                  <span className="highlight">International Presence</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">MMU (Multimedia University)</div>
              <div className="university-info">
                <p>First private university in Malaysia (1997). Part of The Alliance of Government Linked Universities. Leading in multimedia, IT, and telecommunications.</p>
                <div className="university-highlights">
                  <span className="highlight">First Private Uni</span>
                  <span className="highlight">Multimedia Leader</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">Kingston International College</div>
              <div className="university-info">
                <p>Australian-based institution offering pathway programs and foundation courses. Gateway to Australian universities with excellent student support services.</p>
                <div className="university-highlights">
                  <span className="highlight">Australian Pathway</span>
                  <span className="highlight">Foundation Programs</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">Murdoch University</div>
              <div className="university-info">
                <p>Leading Australian university known for research excellence and innovation. Strong programs in business, engineering, and health sciences with global recognition.</p>
                <div className="university-highlights">
                  <span className="highlight">Research Excellence</span>
                  <span className="highlight">Global Recognition</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">IIUM (International Islamic University)</div>
              <div className="university-info">
                <p>Public university established in 1983, integrating Islamic values into curriculum. Comprehensive programs in law, medicine, engineering, and Islamic studies.</p>
                <div className="university-highlights">
                  <span className="highlight">Islamic Integration</span>
                  <span className="highlight">Comprehensive Programs</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">UKM (Universiti Kebangsaan Malaysia)</div>
              <div className="university-info">
                <p>Public research university in Bangi, Selangor (founded 1970). National university with strong research focus and comprehensive academic programs.</p>
                <div className="university-highlights">
                  <span className="highlight">Research University</span>
                  <span className="highlight">National Institution</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">UNIKL (Universiti Kuala Lumpur)</div>
              <div className="university-info">
                <p>Public technical university established in 2002. Specializes in engineering, technology, and applied sciences with strong industry connections.</p>
                <div className="university-highlights">
                  <span className="highlight">Technical Excellence</span>
                  <span className="highlight">Industry Links</span>
                </div>
              </div>
            </div>

            <div className="university-card">
              <div className="university-name">UPM (Universiti Putra Malaysia)</div>
              <div className="university-info">
                <p>Public research university founded in 1971. Leading in agriculture, forestry, veterinary medicine, and environmental sciences with research excellence.</p>
                <div className="university-highlights">
                  <span className="highlight">Agriculture Leader</span>
                  <span className="highlight">Research Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Team />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/60175994407" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.491 3.488"/>
        </svg>
      </a>
    </div>
  )
}

export default AboutUs