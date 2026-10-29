import { useState } from 'react'

const catalog = [
  { id: 1, name: 'Midnight Shift', category: 'Instrumental Beats', price: 49, bpm: 140, key: 'C#m', badge: 'New', tags: ['Dark', 'Trap', 'Melodic'], accent: '#e0a1ff' },
  { id: 2, name: 'Neon Echo', category: 'Instrumental Beats', price: 39, bpm: 128, key: 'A minor', badge: 'Top Seller', tags: ['Synthwave', 'Late Night'], accent: '#79d3ff' },
  { id: 3, name: 'Velvet Pressure', category: 'Loops & Samples', price: 29, bpm: 118, key: 'F# minor', badge: 'Exclusive', tags: ['Piano', 'Soulful'], accent: '#ffbf69' },
  { id: 4, name: 'City Pulse', category: 'Drum Kits', price: 34, bpm: 132, key: 'B minor', badge: 'Pro Kit', tags: ['808', 'Drill'], accent: '#8ef0a2' },
  { id: 5, name: 'Afterglow Pack', category: 'Sound Packs', price: 54, bpm: 122, key: 'D major', badge: 'Bundle', tags: ['Atmos', 'R&B'], accent: '#ff8bb5' },
  { id: 6, name: 'Custom Beat Session', category: 'Custom Services', price: 180, bpm: 'Flexible', key: 'Your Vision', badge: 'Tailored', tags: ['Custom', 'Mixing'], accent: '#80d8ff' },
]

const collections = [
  { title: 'Instrumental Beats', description: 'Dark, melodic, punchy and radio-ready tracks for artists and creators.', stat: '180+ cuts' },
  { title: 'Loops & Samples', description: 'Instant inspiration with polished textures, riffs and one-shots.', stat: '96 packs' },
  { title: 'Drum Kits', description: 'Premium drums built for impact, bounce and precision.', stat: '42 kits' },
  { title: 'Sound Packs', description: 'Deep, curated synths, pianos, ambience and vocal chops.', stat: '28 packs' },
]

const services = [
  {
    title: 'Custom beat production',
    text: 'Get a completely original track shaped around your artist vision, sound, mood, and delivery needs.',
    meta: 'From $180',
  },
  {
    title: 'Mix and master polish',
    text: 'Turn a rough draft into a clean, club-ready final with mix balance, clarity and punch.',
    meta: 'From $75',
  },
  {
    title: 'Exclusive licensing',
    text: 'Secure the rights you need for release, content, ads and brand campaigns with flexible terms.',
    meta: 'Custom quote',
  },
]

const testimonials = [
  { quote: 'The sounds feel premium and cinematic. My project instantly levelled up.', author: 'Ari K. — Independent artist', },
  { quote: 'It feels like a boutique producer catalogue, not a generic sample shop.', author: 'Sora M. — Music director', },
  { quote: 'Fast turnarounds, world-class vibe, and the kind of drums that hit right away.', author: 'Niko V. — Rap producer', },
]

const faqs = [
  { q: 'Do I get a lease or exclusive rights?', a: 'Every product is sold with clear licensing tiers, and custom work includes tailored agreement terms for your release needs.' },
  { q: 'Can I request a custom beat for my project?', a: 'Yes — use the custom production service and VIZYN × SYREN will create a track around your brief, vibe, and intent.' },
  { q: 'Are the packs and drums ready to use immediately?', a: 'Absolutely. All downloads are delivered in production-ready formats for immediate workflow use.' },
  { q: 'Do you offer sound design for commercial campaigns?', a: 'Yes, we offer tailored audio direction for commercials, fashion visuals, ad spots, and branded content.' },
]

const categories = ['All', 'Instrumental Beats', 'Loops & Samples', 'Drum Kits', 'Sound Packs', 'Custom Services']

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [selectedBeat, setSelectedBeat] = useState(catalog[0])

  const filteredProducts =
    activeCategory === 'All'
      ? catalog
      : catalog.filter((item) => item.category === activeCategory)

  const addToCart = (product) => {
    const item = { ...product, cartItemId: Date.now() + Math.random() }
    setCart((prev) => [...prev, item])
  }

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V&amp;S</div>
          <div>
            <span className="brand-name">V&amp;S BEATS</span>
            <span className="brand-tag">VIZYN × SYREN</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#beats">Beats</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
        </nav>

        <div className="header-actions">
          <button className="ghost-btn">Login</button>
          <button className="primary-btn">Cart ({cart.length})</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Premium sound for ambitious artists</p>
            <h1>Find your next sound.</h1>
            <p className="hero-text">
              Explore dark melodies, cinematic drums, smooth loops and custom production crafted by VIZYN × SYREN for artists who want their sound to stand out.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#beats">Shop beats</a>
              <a className="secondary-btn" href="#services">Book custom work</a>
            </div>

            <div className="stat-row">
              <div>
                <strong>280+</strong>
                <span>Beat catalog</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </div>
              <div>
                <strong>24hr</strong>
                <span>Rush delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured V&S Beats preview panel">
            <div className="preview-card main-card">
              <div className="card-topline">
                <span className="live-pill">Now playing</span>
                <span className="price-badge">$49</span>
              </div>

              <div className="track-art" style={{ background: `linear-gradient(135deg, ${selectedBeat.accent}, #080b14)` }} />

              <div className="track-meta">
                <div>
                  <small>{selectedBeat.category}</small>
                  <h3>{selectedBeat.name}</h3>
                </div>
                <button className="mini-btn" onClick={() => addToCart(selectedBeat)}>
                  Add to cart
                </button>
              </div>

              <div className="waveform" aria-hidden="true">
                <span style={{ height: '45%' }} />
                <span style={{ height: '70%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '90%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '86%' }} />
                <span style={{ height: '54%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '94%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '62%' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="logo-row" aria-label="Brand trust indicators">
          <span>Featured in</span>
          <div className="logo-list">
            <span>HYPE CULTURE</span>
            <span>STREET VISION</span>
            <span>NOIR RECORDS</span>
            <span>EXPRESSIVE</span>
          </div>
        </section>

        <section className="collection-section" id="collections">
          <div className="section-heading">
            <p className="eyebrow">Curated sound</p>
            <h2>Built for creators with taste.</h2>
          </div>

          <div className="collection-grid">
            {collections.map((collection) => (
              <article key={collection.title} className="collection-card">
                <span className="chip">{collection.stat}</span>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="store-section" id="beats">
          <div className="section-heading wide">
            <div>
              <p className="eyebrow">Shop the drop</p>
              <h2>Premium beats and producer-grade tools.</h2>
            </div>
            <div className="filter-group" aria-label="Category filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={category === activeCategory ? 'filter-btn active' : 'filter-btn'}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-top">
                  <span className="product-badge">{product.badge}</span>
                  <span className="product-price">${product.price}</span>
                </div>
                <div
                  className="cover-art"
                  style={{ background: `linear-gradient(135deg, ${product.accent}, #141922 60%, #070b12)` }}
                />
                <div className="product-copy">
                  <div className="product-line">
                    <h3>{product.name}</h3>
                    <button className="text-btn" onClick={() => setSelectedBeat(product)}>
                      Preview
                    </button>
                  </div>
                  <div className="meta-strip">
                    <span>{product.bpm} BPM</span>
                    <span>{product.key}</span>
                  </div>
                  <div className="tag-list">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button className="primary-btn full" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Artist services</p>
            <h2>Custom work from the V&amp;S team.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="service-meta">{service.meta}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Start a project</a>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">What creators say</p>
            <h2>Trusted by artists who want more than stock sounds.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq-section" id="contact">
          <div className="faq-copy">
            <p className="eyebrow">Need help choosing?</p>
            <h2>Let’s build the right sound for your next release.</h2>
            <p>
              Choose a beat, build a custom session, or ask for a tailored package for a single, EP, or campaign.
            </p>
            <div className="contact-block">
              <strong>Email</strong>
              <a href="mailto:hello@vsbeats.com">hello@vsbeats.com</a>
              <strong>Instagram</strong>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">@vsbeats</a>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="cart-panel" aria-label="Shopping cart">
        <div className="cart-header">
          <h3>Cart</h3>
          <span>{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <span>Add a beat, kit, or custom package to get started.</span>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.cartItemId} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </div>
                <div className="cart-actions">
                  <span>${item.price}</span>
                  <button onClick={() => removeFromCart(item.cartItemId)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <strong>${subtotal}</strong>
          </div>
          <button className="primary-btn full">Checkout</button>
        </div>
      </aside>

      <footer className="site-footer">
        <p>© 2025 V&amp;S Beats — VIZYN × SYREN</p>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}

export default App
