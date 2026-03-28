import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Star, Barbell, Heart,
  UserCircle, ArrowRight, List, X, Clock, InstagramLogo,
  Lightning, PersonSimpleRun, HandFist, YinYang, Timer,
  Users,
} from '@phosphor-icons/react'

const WHATSAPP = '554833041775'
const PHONE_NUM = '(48) 3304-1775'
const ADDRESS = 'R. Ja\u00fa Guedes da Fonseca, 142 - Coqueiros, Florian\u00f3polis - SC'

const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const NAV = [
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const MODALITIES = [
  { icon: <Barbell size={32} weight="duotone" />, title: 'Muscula\u00e7\u00e3o', desc: 'Equipamentos modernos e acompanhamento personalizado para seus objetivos.' },
  { icon: <PersonSimpleRun size={32} weight="duotone" />, title: 'Funcional', desc: 'Treinos din\u00e2micos que melhoram condicionamento, for\u00e7a e mobilidade.' },
  { icon: <Lightning size={32} weight="duotone" />, title: 'Gin\u00e1stica', desc: 'Aulas em grupo com energia e motiva\u00e7\u00e3o. V\u00e1rias modalidades dispon\u00edveis.' },
  { icon: <HandFist size={32} weight="duotone" />, title: 'Artes Marciais', desc: 'Treinamento de luta para condicionamento f\u00edsico e autodefesa.' },
  { icon: <YinYang size={32} weight="duotone" />, title: 'Yoga e Pilates', desc: 'Flexibilidade, equil\u00edbrio e bem-estar. Corpo e mente em harmonia.' },
  { icon: <Heart size={32} weight="duotone" />, title: 'Ritmos', desc: 'Aulas de dan\u00e7a e ritmos para se divertir enquanto queima calorias.' },
]

const REVIEWS = [
  { name: 'Marcos R.', text: 'A melhor academia de Coqueiros! Ambiente familiar, professores atenciosos e equipamentos excelentes. Treino l\u00e1 h\u00e1 anos.', stars: 5 },
  { name: 'Fernanda L.', text: 'Adoro a Incorpore! O clima de bairro faz toda a diferen\u00e7a. Todo mundo se conhece e se motiva. Super recomendo!', stars: 5 },
  { name: 'Andr\u00e9 C.', text: 'Fiz funcional e muscula\u00e7\u00e3o e os resultados foram incr\u00edveis. Professores qualificados e acompanhamento top.', stars: 5 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <Helmet><title>Incorpore Academia | Coqueiros, Florian\u00f3polis</title></Helmet>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '12px 0',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--dark-border)' : 'none', transition: 'all 0.4s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: 'var(--display)', fontSize: '1.6rem', color: 'var(--lime)', letterSpacing: '0.05em' }}>INCORPORE</a>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {NAV.map(n => <a key={n.href} href={n.href} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
              onMouseEnter={e => e.target.style.color = 'var(--lime)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{n.label}</a>)}
            <a href={wa('Ol\u00e1! Quero conhecer a Incorpore Academia!')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--lime)', color: 'var(--dark)', padding: '10px 24px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700 }}>
              <WhatsappLogo size={18} weight="duotone" /> Aula Experimental
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', color: 'var(--lime)', cursor: 'pointer' }}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden', background: 'rgba(10,10,10,0.98)' }}>
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px 0', borderBottom: '1px solid var(--dark-border)', fontFamily: 'var(--display)', fontSize: '1.2rem' }}>{n.label}</a>)}
                <a href={wa('Quero agendar!')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--lime)', color: 'var(--dark)', padding: '14px', borderRadius: '6px', fontWeight: 700, justifyContent: 'center' }}>
                  <WhatsappLogo size={18} weight="duotone" /> Aula Experimental
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #0A0A0A 0%, #111508 50%, #0A0A0A 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: '80px' }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(163,230,53,0.1)', padding: '8px 20px', borderRadius: '40px', marginBottom: '28px' }}>
            <Timer size={18} weight="duotone" style={{ color: 'var(--lime)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--lime)', fontWeight: 600, letterSpacing: '0.1em' }}>DESDE 2012 EM COQUEIROS</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--display)', fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff', marginBottom: '8px', lineHeight: 0.95 }}>
            INCORPORE
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--lime)', letterSpacing: '0.2em', marginBottom: '24px' }}>
            ACADEMIA
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 36px', fontWeight: 300 }}>
            Muscula\u00e7\u00e3o, funcional, gin\u00e1stica, artes marciais, yoga e pilates.
            O esp\u00edrito de bairro de Coqueiros dentro de uma academia completa.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={wa('Ol\u00e1! Quero agendar uma aula experimental na Incorpore!')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--lime)', color: 'var(--dark)', padding: '16px 36px', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase' }}>
              <WhatsappLogo size={22} weight="duotone" /> Aula Experimental Gr\u00e1tis
            </a>
            <a href="#modalidades" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '2px solid var(--lime)', color: 'var(--lime)', padding: '16px 36px', borderRadius: '6px', fontWeight: 700, textTransform: 'uppercase' }}>
              Modalidades <ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
            style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginTop: '52px', flexWrap: 'wrap' }}>
            {[
              { icon: <Star size={20} weight="fill" style={{ color: 'var(--lime)' }} />, text: '4.7 no Google' },
              { icon: <Users size={20} weight="duotone" style={{ color: 'var(--text-muted)' }} />, text: 'Comunidade local' },
              { icon: <Barbell size={20} weight="duotone" style={{ color: 'var(--text-muted)' }} />, text: '6+ modalidades' },
            ].map(b => (
              <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {b.icon}<span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section id="modalidades" style={{ padding: '100px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>NOSSAS <span style={{ color: 'var(--lime)' }}>MODALIDADES</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {MODALITIES.map((m, i) => (
              <motion.div key={m.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: '28px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '10px', transition: 'border-color .3s, transform .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(163,230,53,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: 'var(--lime)', marginBottom: '14px' }}>{m.icon}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', marginBottom: '8px' }}>{m.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={wa('Ol\u00e1! Quero saber mais sobre as modalidades.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--lime)', color: 'var(--dark)', padding: '16px 36px', borderRadius: '6px', fontWeight: 700, textTransform: 'uppercase' }}>
              <WhatsappLogo size={20} weight="duotone" /> Quero Experimentar
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(163,230,53,0.08), rgba(163,230,53,0.02))', borderRadius: '12px', border: '1px solid var(--dark-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <Barbell size={80} weight="duotone" style={{ color: 'var(--lime)', opacity: 0.4 }} />
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontFamily: 'var(--display)', fontSize: '1.2rem' }}>INCORPORE</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px' }}>
                MAIS QUE UMA <span style={{ color: 'var(--lime)' }}>ACADEMIA</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.8 }}>
                A Incorpore nasceu do sonho de dois jovens empreendedores de abrir uma academia em Coqueiros,
                um dos poucos lugares em Florian\u00f3polis que ainda mant\u00e9m o esp\u00edrito de bairro,
                onde as pessoas se conhecem, se respeitam e ainda param para conversar.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '28px', lineHeight: 1.8 }}>
                Desde 2012, oferecemos muscula\u00e7\u00e3o, gin\u00e1stica, funcional e artes marciais
                em um espa\u00e7o acolhedor perto do parque. Aqui voc\u00ea treina e faz amigos.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { num: '13+', label: 'Anos de Hist\u00f3ria' },
                  { num: '4.7', label: 'Nota Google' },
                  { num: '6+', label: 'Modalidades' },
                  { num: 'Coqueiros', label: 'Perto do Parque' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '14px', background: 'rgba(163,230,53,0.05)', border: '1px solid rgba(163,230,53,0.1)', borderRadius: '8px' }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '1.3rem', color: 'var(--lime)' }}>{s.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--lime-dark), #65A30D)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)', marginBottom: '16px' }}>COMECE HOJE MESMO</h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '32px', fontSize: '1.05rem' }}>Agende uma aula experimental gr\u00e1tis e conhe\u00e7a nossa estrutura!</p>
          <a href={wa('Ol\u00e1! Quero agendar uma aula experimental gr\u00e1tis na Incorpore!')} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--dark)', color: 'var(--lime)', padding: '16px 40px', borderRadius: '6px', fontWeight: 700, fontSize: '1.05rem', textTransform: 'uppercase' }}>
            <WhatsappLogo size={22} weight="duotone" /> Agendar Aula Gr\u00e1tis
          </a>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>NOSSOS <span style={{ color: 'var(--lime)' }}>ALUNOS</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {REVIEWS.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ padding: '28px', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={18} weight="fill" style={{ color: 'var(--lime)' }} />)}</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '16px' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCircle size={28} weight="duotone" style={{ color: 'var(--lime)' }} />
                  <p style={{ fontWeight: 600 }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: '100px 0', background: 'var(--dark-card)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '24px' }}>VENHA <span style={{ color: 'var(--lime)' }}>TREINAR</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <MapPin size={22} weight="duotone" />, label: 'Endere\u00e7o', value: ADDRESS },
                  { icon: <Phone size={22} weight="duotone" />, label: 'Telefone', value: PHONE_NUM },
                  { icon: <Clock size={22} weight="duotone" />, label: 'Hor\u00e1rio', value: 'Seg-Sex 6h30-23h | S\u00e1b 9h-13h' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '8px', background: 'rgba(163,230,53,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--lime)', flexShrink: 0 }}>{c.icon}</div>
                    <div><p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 2 }}>{c.label}</p><p>{c.value}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: '40px', background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '12px', textAlign: 'center' }}>
              <Barbell size={56} weight="duotone" style={{ color: 'var(--lime)', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', marginBottom: '12px' }}>AULA EXPERIMENTAL</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>Venha conhecer nossa estrutura e treinar de gra\u00e7a!</p>
              <a href={wa('Ol\u00e1! Quero agendar uma aula experimental gr\u00e1tis!')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--lime)', color: 'var(--dark)', padding: '14px 32px', borderRadius: '6px', fontWeight: 700, width: '100%', justifyContent: 'center', textTransform: 'uppercase' }}>
                <WhatsappLogo size={20} weight="duotone" /> Agendar Agora
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0 20px', borderTop: '1px solid var(--dark-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--display)', color: 'var(--lime)', fontSize: '1.3rem', marginBottom: '12px' }}>INCORPORE</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Academia completa em Coqueiros, Florian\u00f3polis. Desde 2012 transformando vidas.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--display)', fontSize: '1rem', marginBottom: '12px' }}>LINKS</h4>
              {NAV.map(n => <a key={n.href} href={n.href} style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>{n.label}</a>)}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--display)', fontSize: '1rem', marginBottom: '12px' }}>CONTATO</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{ADDRESS}<br />{PHONE_NUM}</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Incorpore Academia. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a href={wa('Quero treinar!')} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.4)', zIndex: 999 }}>
        <WhatsappLogo size={30} weight="fill" style={{ color: '#fff' }} />
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  )
}
