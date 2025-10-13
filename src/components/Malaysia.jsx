import './Malaysia.css'
import klImage from '../assets/KL.png'
import { useEffect, useRef } from 'react'

const Malaysia = () => {
  const universities = [
    {
      "University Name": "City University Malaysia",
      "Description": "Established in 1984, City University Malaysia began as a community college and has grown into a well-regarded university. It provides high-quality, industry and market-driven courses and is accredited by the Malaysian Ministry of Higher Education, with its degrees recognized internationally.",
      "Official Website": "https://city.edu.my/"
    },
    {
      "University Name": "International Islamic University Malaysia (IIUM)",
      "Description": "Founded in 1983, IIUM is a public university with multiple campuses in Malaysia. It focuses on integrating Islamic values with academic excellence and offers a wide range of undergraduate and postgraduate programs, with international affiliations.",
      "Official Website": "https://www.iium.edu.my/"
    },
    {
      "University Name": "INTI International University & Colleges",
      "Description": "A leading Malaysian institution known for its modern education and global connections. It offers industry-relevant programs, a lively student life, and is part of the Laureate International Universities network, which provides global opportunities.",
      "Official Website": "https://newinti.edu.my/"
    },
    {
      "University Name": "MAHSA University",
      "Description": "Established in 2004, MAHSA (Malaysian Allied Health Sciences Academy) specializes in healthcare and other fields like Business, IT, and Engineering. It offers programs from Diploma to Doctoral levels and aims to be a center of excellence in higher education.",
      "Official Website": "https://mahsa.edu.my/"
    },
    {
      "University Name": "Multimedia University (MMU)",
      "Description": "As Malaysia's first private university, owned by Telekom Malaysia, MMU offers programs in AI, IT, Engineering, Management, Accounting, Law, and Creative Multimedia. It is known for producing highly employable graduates in ICT and other fields.",
      "Official Website": "https://www.mmu.edu.my/"
    },
    {
      "University Name": "SEGi University & Colleges",
      "Description": "A major provider of private higher education in Malaysia, recognized in the QS World University Rankings. It offers a wide array of programs in disciplines such as Accounting & Finance, Allied Health Science, Engineering, and Information Technology.",
      "Official Website": "https://www.segi.edu.my/"
    },
    {
      "University Name": "Taylor's University",
      "Description": "A top-ranked, internationally recognized university dedicated to holistic student development. It offers a diverse range of undergraduate and postgraduate programs.",
      "Official Website": "https://university.taylors.edu.my/en.html"
    },
    {
      "University Name": "UCSI University",
      "Description": "A leading institution with campuses in Kuala Lumpur, Springhill, and Kuching. It offers numerous programs, including Medicine, Pharmacy, Engineering, and Hospitality, and is known for its research focus.",
      "Official Website": "https://www.ucsiuniversity.edu.my/"
    },
    {
      "University Name": "Universiti Kebangsaan Malaysia (UKM)",
      "Description": "The National University of Malaysia, a public research university in Bangi, Selangor. Established in 1970, it focuses on addressing current issues and has a teaching hospital in Cheras.",
      "Official Website": "https://www.ukm.my/"
    },
    {
      "University Name": "Universiti Kuala Lumpur (UniKL)",
      "Description": "A leading university in engineering technology, owned by MARA Corp. UniKL aims to enhance technical education in Malaysia and produces graduates with technological and entrepreneurial skills through its 13 specialized branch institutes.",
      "Official Website": "https://www.unikl.edu.my/"
    },
    {
      "University Name": "Universiti Tenaga Nasional (UNITEN)",
      "Description": "Known as 'The Energy University,' UNITEN is wholly owned by Tenaga Nasional Berhad (TNB). It blends academic excellence with industry relevance, focusing on sustainability and advancing knowledge.",
      "Official Website": "https://uniten.edu.my/"
    },
    {
      "University Name": "University of Cyberjaya",
      "Description": "A prominent private institution recognized for its healthcare and technology programs. Established in 2005, it offers an innovative curriculum and a dynamic learning environment, and is accredited by the Malaysian Qualifications Agency (MQA).",
      "Official Website": "https://cyberjaya.edu.my/"
    },
    {
      "University Name": "Universiti Putra Malaysia (UPM)",
      "Description": "A public research university and a leading center for learning and research. UPM is dedicated to contributing to human advancement, knowledge discovery, wealth creation, and nation-building. It is also recognized as one of the most sustainable campuses globally.",
      "Official Website": "https://upm.edu.my/"
    },
    {
      "University Name": "Asia Pacific University of Technology & Innovation (APU)",
      "Description": "A premier private university in Malaysia, distinguished for its integration of technology, innovation, and creativity. APU has received numerous awards and is noted for producing highly employable graduates, earning global and national recognition in various rankings.",
      "Official Website": "https://www.apu.edu.my/"
    },
    {
      "University Name": "Kuala Lumpur University of Science and Technology (KLUST)",
      "Description": "Formerly known as Infrastructure University Kuala Lumpur (IUKL), KLUST rebranded in 2025. It is focused on becoming a top Science & Technology University in ASEAN, with AI and digital technology at its core. It collaborates with international institutions to address global sustainability challenges.",
      "Official Website": "https://klust.edu.my/"
    }
  ]

  // Scroll animation setup
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
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="malaysia-page">
      <div className="page-hero malaysia-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Study in Malaysia</h1>
            <h2 className="hero-subtitle">Your Gateway to World-Class Education in Southeast Asia</h2>
            <p className="hero-description">
              Experience affordable, high-quality education in Malaysia's top universities. 
              Join thousands of international students in this multicultural hub with English-taught programs and globally recognized degrees.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Partner Universities</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50%</span>
                <span className="stat-label">Lower Costs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="malaysia-overview">
        <div className="container">
          <div className="overview-grid animate-on-scroll">
            <div className="overview-text">
              <h2>Why Choose Malaysia?</h2>
              <p className="overview-description">Malaysia has emerged as a leading destination for international students, offering high-quality education at affordable costs in a multicultural environment that perfectly blends tradition with modernity.</p>
              
              <h3>Benefits of Studying in Malaysia</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">🎓</div>
                  <div className="benefit-content">
                    <h4>Affordable Education</h4>
                    <p>Low tuition fees and living costs</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">🌍</div>
                  <div className="benefit-content">
                    <h4>English Programs</h4>
                    <p>Wide range of English-taught courses</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">🤝</div>
                  <div className="benefit-content">
                    <h4>Multicultural Society</h4>
                    <p>Rich cultural diversity and harmony</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">📍</div>
                  <div className="benefit-content">
                    <h4>Strategic Location</h4>
                    <p>Gateway to Southeast Asia</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">⭐</div>
                  <div className="benefit-content">
                    <h4>Quality Education</h4>
                    <p>Internationally recognized standards</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>Safe Environment</h4>
                    <p>Welcoming and secure atmosphere</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overview-image">
              <img src={klImage} alt="Kuala Lumpur skyline" />
            </div>
          </div>
        </div>
      </section>

      <section className="culture-food-section">
        <div className="container">
          <h2 className="animate-on-scroll">Experience Malaysian Culture & Cuisine</h2>
          
          <div className="culture-cards">
            <div className="culture-card animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="culture-icon">🏛️</div>
              <h3>Rich Cultural Heritage</h3>
              <p>Malaysia's multicultural society brings together Malay, Chinese, Indian, and indigenous cultures, creating a unique and harmonious blend that enriches student life with festivals, traditions, and diverse perspectives.</p>
            </div>
            
            <div className="culture-card animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="culture-icon">🍜</div>
              <h3>Delicious Malaysian Food</h3>
              <p>Experience world-renowned cuisine including Nasi Lemak, Rendang, Char Kway Teow, and Laksa. Street food culture offers affordable and delicious meals, perfect for student budgets while exploring authentic flavors.</p>
            </div>
            
            <div className="culture-card animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="culture-icon">🎉</div>
              <h3>Vibrant Festivals</h3>
              <p>Celebrate diverse festivals like Hari Raya, Chinese New Year, Deepavali, and Christmas. These celebrations create opportunities for cultural exchange and unforgettable memories during your studies.</p>
            </div>
            
            <div className="culture-card animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="culture-icon">🏙️</div>
              <h3>Modern Lifestyle</h3>
              <p>Enjoy modern amenities in cities like Kuala Lumpur and Penang, with excellent public transportation, shopping malls, entertainment venues, and a tech-savvy environment perfect for student life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="universities-section">
        <div className="container">
          <h2 className="animate-on-scroll">Top Universities in Malaysia</h2>
          <div className="universities-grid">
            {universities.map((university, index) => (
              <div key={index} className="university-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="university-name">{university["University Name"]}</h3>
                <p className="university-description">{university.Description}</p>
                <a 
                  href={university["Official Website"]} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="learn-more-btn"
                >
                  Learn More About University
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section animate-on-scroll">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title glitch-text" data-text="Ready to Start Your Journey in Malaysia?">
              Ready to Start Your Journey in Malaysia?
            </h2>
            <p className="cta-description">
              Take the first step towards your international education. Get personalized guidance and detailed information about studying in Malaysia.
            </p>
            <a 
              href="https://wa.me/60175994407?text=Hi%2C%20I%27m%20interested%20in%20studying%20in%20Malaysia.%20Can%20you%20help%20me%3F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              <span className="button-text">Get Malaysia Study Guide</span>
              <span className="button-icon">📚</span>
            </a>
          </div>
        </div>
      </section>
      
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

export default Malaysia