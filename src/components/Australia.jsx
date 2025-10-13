import { useEffect, useRef } from 'react'

const Australia = () => {
  const observerRef = useRef(null)
  const isMobile = window.innerWidth <= 768

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
    <div style={{ minHeight: '100vh' }}>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: isMobile ? '2rem' : '3rem',
          margin: isMobile ? '1rem' : '0',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{
            fontSize: isMobile ? '3rem' : '4rem',
            marginBottom: '2rem',
            display: 'block'
          }}></div>
          
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Study in Australia
          </h1>
          
          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '2rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#8bc34a'
          }}>
            Coming Soon
          </h2>
          
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            lineHeight: '1.6',
            marginBottom: '3rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            We're working hard to bring you comprehensive information about studying in Australia. 
            Stay tuned for exciting opportunities Down Under!
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Get Notified When We Launch</h3>
            <a 
              href="https://wa.me/60175994407?text=Hi%2C%20I%27m%20interested%20in%20studying%20in%20Australia.%20Please%20notify%20me%20when%20the%20Australia%20section%20is%20available!" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                background: 'linear-gradient(135deg, #8bc34a, #7cb342)',
                color: 'white',
                padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #7cb342, #689f38)'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(139, 195, 74, 0.3)'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #8bc34a, #7cb342)'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>📱</span>
              Notify Me via WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/60175994407" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Contact us on WhatsApp"
        style={{
          position: 'fixed',
          width: isMobile ? '50px' : '60px',
          height: isMobile ? '50px' : '60px',
          bottom: isMobile ? '15px' : '20px',
          right: isMobile ? '15px' : '20px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          zIndex: '1000',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#128c7e'
          e.target.style.transform = 'scale(1.1)'
          e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)'
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#25d366'
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)'
        }}
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

export default Australia