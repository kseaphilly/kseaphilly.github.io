// KSEA Philadelphia — website (v2)
// Heritage seal + modern chapter identity. Bio / Bio-engineering / AI × Bio focus.

const W_NAVY = '#2E3A94';
const W_LIGHT = '#6B7AC9';
const W_CREAM = '#F4EBD9';
const W_BRICK = '#B0413E';
const W_INK = '#121212';
const W_PAPER = '#FAF6EC';
const W_BIO = '#2A6F5B';

function SiteSeal({ size = 40 }) {
  return <img src="assets/ksea-philly-seal.png" alt="KSEA Philly" style={{ height: size, width: 'auto', display: 'block' }} />;
}

function KSEAWebsite({ width = 1280 }) {
  return (
    <div style={{
      width, background: W_PAPER,
      fontFamily: '"Space Grotesk", -apple-system, sans-serif',
      color: W_INK, position: 'relative', overflow: 'hidden',
    }}>
      {/* Ticker */}
      <div style={{
        background: W_INK, color: W_CREAM, padding: '8px 40px',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
        letterSpacing: 0.6, textTransform: 'uppercase',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>▸ Next · AI × Biotech Symposium · Thu May 14 · Penn BRB II/III</span>
        <span style={{ opacity: 0.7 }}>필라델피아 지부 · Since 1983</span>
      </div>

      {/* Nav — uses the official seal */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px', borderBottom: `1px solid ${W_INK}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <SiteSeal size={46} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: -0.3, color: W_NAVY }}>KSEA Philadelphia</div>
            <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', color: W_INK, opacity: 0.6, marginTop: 4, letterSpacing: 0.4, textTransform: 'uppercase' }}>
              Bio · Bio-Engineering · AI
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 30, fontSize: 14, alignItems: 'center' }}>
          {['About', 'Research', 'Events', 'Members', 'Scholarship', 'Sponsors'].map(n => (
            <a key={n} style={{ color: W_INK, textDecoration: 'none', fontWeight: 500 }}>{n}</a>
          ))}
          <button style={{
            background: W_NAVY, color: W_CREAM, border: 'none', padding: '10px 18px',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>Join → </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        borderBottom: `1px solid ${W_INK}`, minHeight: 580,
      }}>
        <div style={{ padding: '60px 40px', borderRight: `1px solid ${W_INK}`, position: 'relative' }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
            letterSpacing: 1, textTransform: 'uppercase', color: W_BRICK, marginBottom: 28,
          }}>
            ❚ Philadelphia Chapter · Since 1983 · Part of KSEA (Est. 1971)
          </div>
          <h1 style={{
            fontSize: 80, fontWeight: 600, lineHeight: 0.95,
            letterSpacing: -2, margin: 0, color: W_INK,
          }}>
            Where <span style={{ color: W_BIO }}>biology</span>,<br/>
            <span style={{ color: W_NAVY }}>bio-engineering</span>,<br/>
            and <span style={{ fontStyle: 'italic', fontWeight: 400 }}>AI</span> meet<br/>
            in Philadelphia.
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.55, maxWidth: 540,
            marginTop: 32, color: W_INK, opacity: 0.85,
          }}>
            A community of Korean-American researchers and engineers across
            Penn Medicine, CHOP, Jefferson, Drexel, Temple, Merck, GSK, Spark,
            and Iovance — building the next decade of therapeutics, devices,
            and AI-for-biology in the Delaware Valley.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 14 }}>
            <button style={{ background: W_NAVY, color: W_CREAM, border: 'none', padding: '14px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Become a member →</button>
            <button style={{ background: 'transparent', color: W_INK, border: `1.5px solid ${W_INK}`, padding: '14px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Upcoming events</button>
          </div>

          {/* stats */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            borderTop: `1px solid ${W_INK}`,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          }}>
            {[
              ['68%', 'members in bio / bio-eng'],
              ['17', 'labs & companies'],
              ['$40k', 'annual scholarship'],
              ['1983', 'chapter founded'],
            ].map(([n, l], i) => (
              <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? `1px solid ${W_INK}` : 'none' }}>
                <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5, color: W_NAVY }}>{n}</div>
                <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', opacity: 0.6, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero right — next event, navy panel */}
        <div style={{
          background: W_NAVY, color: W_CREAM,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: 40, position: 'relative',
        }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase', opacity: 0.7 }}>
            Flagship event ↓
          </div>
          <div>
            <div style={{ fontFamily: '"Noto Serif KR", serif', fontSize: 26, opacity: 0.85, marginBottom: 12, fontWeight: 500 }}>
              AI × 바이오테크 심포지엄
            </div>
            <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: -1, lineHeight: 1.05, marginBottom: 20 }}>
              AI × Biotech<br/>
              <span style={{ color: '#FFB4A8' }}>Symposium 2026</span>
            </div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, lineHeight: 1.7, opacity: 0.9 }}>
              THU · MAY 14 · 09:00–17:00<br/>
              PENN BRB II/III · 421 CURIE BLVD<br/>
              KEYNOTE · PROF. SUNGJIN KIM (SNU)<br/>
              PANELS · FOUNDATION MODELS IN BIO,<br/>
              REGULATORY AI, CELL THERAPY AT SCALE
            </div>
            <button style={{ marginTop: 24, background: W_CREAM, color: W_NAVY, border: 'none', padding: '12px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              Register →
            </button>
          </div>
          {/* watermark seal */}
          <div style={{ position: 'absolute', right: -50, bottom: -50, opacity: 0.08, pointerEvents: 'none' }}>
            <img src="assets/ksea-philly-seal.png" style={{ height: 360, filter: 'brightness(0) invert(1)' }} alt="" />
          </div>
        </div>
      </section>

      {/* Research pillars — NEW */}
      <section style={{ borderBottom: `1px solid ${W_INK}` }}>
        <div style={{ padding: '18px 40px', display: 'flex', justifyContent: 'space-between', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', borderBottom: `1px solid ${W_INK}` }}>
          <span>§ 02 — Research pillars</span>
          <span style={{ opacity: 0.6 }}>The focus areas our Philly membership actually does</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            {
              no: '01',
              kr: '바이올로지',
              en: 'Biology',
              body: 'Cell & molecular biology, immunology, neuroscience, genomics. Our members span Penn Medicine, CHOP, Wistar, Fox Chase, and Jefferson.',
              tags: ['Immunology', 'Genomics', 'Neuroscience', 'Single-cell'],
              color: W_BIO,
            },
            {
              no: '02',
              kr: '바이오엔지니어링',
              en: 'Bio-engineering',
              body: 'Medical devices, tissue engineering, biomaterials, imaging, drug delivery. Deep ties with Penn Bioengineering, Drexel BIOMED, and Jefferson.',
              tags: ['BME', 'Drug delivery', 'Imaging', 'Biomaterials'],
              color: W_NAVY,
            },
            {
              no: '03',
              kr: 'AI × 바이오',
              en: 'AI × Bio',
              body: 'Foundation models for biology, protein design, clinical NLP, ML for drug discovery. Fast-growing crossover from CS to wet-lab.',
              tags: ['Protein design', 'Clinical NLP', 'ML/Drug', 'Foundation models'],
              color: W_BRICK,
            },
          ].map((p, i) => (
            <div key={i} style={{
              padding: '40px 32px 32px',
              borderRight: i < 2 ? `1px solid ${W_INK}` : 'none',
              minHeight: 340, position: 'relative',
              background: i === 2 ? W_CREAM : W_PAPER,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: p.color, letterSpacing: 1 }}>PILLAR {p.no}</div>
                <div style={{ width: 36, height: 36, background: p.color }} />
              </div>
              <div style={{ fontFamily: '"Noto Serif KR", serif', fontSize: 20, color: p.color, marginBottom: 6, fontWeight: 500 }}>{p.kr}</div>
              <h3 style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.8, margin: 0, lineHeight: 1 }}>{p.en}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 14, opacity: 0.8 }}>{p.body}</p>
              <div style={{ position: 'absolute', bottom: 28, left: 32, right: 32, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: '4px 10px', border: `1px solid ${p.color}`, color: p.color,
                    fontSize: 11, fontFamily: '"JetBrains Mono", monospace', letterSpacing: 0.3,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section style={{ borderBottom: `1px solid ${W_INK}` }}>
        <div style={{ padding: '18px 40px', display: 'flex', justifyContent: 'space-between', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', borderBottom: `1px solid ${W_INK}` }}>
          <span>§ 03 — Upcoming events</span>
          <span style={{ opacity: 0.6 }}>Spring → Summer 2026</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { tag: 'Symposium', date: 'MAY 14', time: '09:00', title: 'AI × Biotech Symposium', body: 'Full-day with keynote, three panels, poster session. Co-hosted with Penn Medicine.', loc: 'Penn BRB II/III', spots: '180 / 220', color: W_BRICK },
            { tag: 'Seminar', date: 'JUN 07', time: '17:30', title: 'Protein Foundation Models', body: 'Informal talk from a Prescient Design / Genentech alum now at Spark Therapeutics.', loc: 'CHOP · Colket', spots: '60 / 80', color: W_NAVY },
            { tag: 'Career', date: 'JUL 12', time: '10:00', title: 'Bio/Pharma Mentor Day', body: '1:1 sessions with senior scientists at Merck, GSK, Iovance, Spark, and Vertex Cell Therapy.', loc: 'Drexel URBN', spots: '48 / 60', color: W_BIO },
          ].map((e, i) => (
            <article key={i} style={{
              padding: '32px 32px 28px',
              borderRight: i < 2 ? `1px solid ${W_INK}` : 'none',
              background: W_PAPER, minHeight: 340, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{
                  display: 'inline-block', padding: '4px 10px',
                  background: e.color, color: W_CREAM, fontSize: 10,
                  fontFamily: '"JetBrains Mono", monospace', letterSpacing: 1, textTransform: 'uppercase',
                }}>{e.tag}</div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.5, lineHeight: 1 }}>{e.date}</div>
                  <div style={{ fontSize: 11, fontFamily: '"JetBrains Mono", monospace', opacity: 0.6, marginTop: 4 }}>{e.time} EDT</div>
                </div>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.5, margin: 0, lineHeight: 1.1 }}>{e.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, marginTop: 14, opacity: 0.8, flex: 1 }}>{e.body}</p>
              <div style={{ borderTop: `1px dashed ${W_INK}55`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', fontSize: 12, fontFamily: '"JetBrains Mono", monospace' }}>
                <span>▸ {e.loc}</span>
                <span style={{ opacity: 0.7 }}>{e.spots}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured labs */}
      <section style={{ borderBottom: `1px solid ${W_INK}`, padding: '60px 40px' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: W_BRICK, marginBottom: 14 }}>§ 04 — Labs & companies in our network</div>
        <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1, margin: 0, maxWidth: 820, lineHeight: 1.05 }}>
          Members work across the Delaware Valley's biotech ecosystem.
        </h2>
        <div style={{
          marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid ${W_INK}`, borderLeft: `1px solid ${W_INK}`,
        }}>
          {[
            ['Penn Medicine', 'Academic · Gene therapy, immunology'],
            ['CHOP Research', 'Pediatric genomics, AI in clinical'],
            ['Jefferson Health', 'Translational bio-engineering'],
            ['Drexel BIOMED', 'Devices, tissue engineering'],
            ['Merck', 'Vaccines, oncology, mRNA'],
            ['GSK', 'Biologics, discovery'],
            ['Spark Therapeutics', 'Gene therapy (Roche)'],
            ['Iovance', 'TIL cell therapy'],
            ['Vertex (Cell & Genetic)', 'Type 1 diabetes, sickle cell'],
            ['Wistar Institute', 'Cancer & immunology'],
            ['Fox Chase Cancer', 'Oncology research'],
            ['Century Therapeutics', 'iPSC-derived cell therapy'],
          ].map(([name, desc], i) => (
            <div key={name} style={{
              padding: '22px 20px', borderRight: `1px solid ${W_INK}`, borderBottom: `1px solid ${W_INK}`,
              minHeight: 100,
            }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: W_NAVY }}>{name}</div>
              <div style={{ fontSize: 12, opacity: 0.65, marginTop: 6, lineHeight: 1.5, fontFamily: '"JetBrains Mono", monospace', letterSpacing: 0.2 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Board */}
      <section style={{ borderBottom: `1px solid ${W_INK}` }}>
        <div style={{ padding: '18px 40px', display: 'flex', justifyContent: 'space-between', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', borderBottom: `1px solid ${W_INK}` }}>
          <span>§ 05 — 2026 Board</span>
          <span style={{ opacity: 0.6 }}>Bio-skewed leadership</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            ['Dr. Jisoo Park', 'President', 'Penn · Bioengineering', W_NAVY],
            ['Minho Lee, PhD', 'VP, Programs', 'Merck · Discovery', W_BIO],
            ['Dr. Hannah Cho', 'Research Chair', 'CHOP · Comp. Genomics', W_BRICK],
            ['Dr. Taehyun Kim', 'AI × Bio Lead', 'Penn · CIS / Med', W_NAVY],
          ].map(([name, role, aff, c], i) => (
            <div key={i} style={{
              padding: 32, borderRight: i < 3 ? `1px solid ${W_INK}` : 'none',
              minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{
                width: '100%', aspectRatio: '1',
                background: `repeating-linear-gradient(45deg, ${c}11, ${c}11 8px, ${c}22 8px, ${c}22 16px)`,
                border: `1px solid ${W_INK}`, position: 'relative', marginBottom: 16,
              }}>
                <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.5 }}>portrait · 1:1</div>
                <div style={{ position: 'absolute', bottom: 12, right: 12, width: 24, height: 24, background: c }} />
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.2 }}>{name}</div>
                <div style={{ fontSize: 13, color: c, fontWeight: 500, marginTop: 2 }}>{role}</div>
                <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4, fontFamily: '"JetBrains Mono", monospace' }}>{aff}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors — navy strip */}
      <section style={{
        background: W_NAVY, color: W_CREAM, padding: '60px 40px',
        borderBottom: `1px solid ${W_INK}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6, marginBottom: 12 }}>§ 06 — Corporate partners</div>
            <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: -1, margin: 0, maxWidth: 720 }}>
              Backed by the Delaware Valley's biotech leaders.
            </h2>
          </div>
          <button style={{ background: 'transparent', color: W_CREAM, border: `1.5px solid ${W_CREAM}`, padding: '12px 22px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Partner with us →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', borderTop: `1px solid ${W_CREAM}33`, borderLeft: `1px solid ${W_CREAM}33` }}>
          {['MERCK', 'GSK', 'SPARK', 'IOVANCE', 'VERTEX', 'WISTAR', 'CHOP', 'PENN MED', 'JEFFERSON', 'DREXEL', 'SK-BIO', 'SAMSUNG BIO'].map(n => (
            <div key={n} style={{
              padding: '32px 20px',
              borderRight: `1px solid ${W_CREAM}33`, borderBottom: `1px solid ${W_CREAM}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 600, letterSpacing: 1, fontSize: 14, opacity: 0.75,
            }}>{n}</div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section style={{ padding: '80px 40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: '"Noto Serif KR", serif', fontSize: 22, color: W_BRICK, marginBottom: 14 }}>
            함께 하시겠습니까?
          </div>
          <h2 style={{ fontSize: 60, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1, margin: 0 }}>
            Join KSEA<br/>Philadelphia.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.5, maxWidth: 480, marginTop: 20, opacity: 0.8 }}>
            $25/yr students · $60/yr professionals. Includes event access, mentor matching, and symposium registration.
          </p>
        </div>
        <form style={{ background: W_CREAM, padding: 32, border: `1px solid ${W_INK}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6 }}>→ Membership application</div>
          {['Full name', 'Email', 'Affiliation (lab / company)'].map(ph => (
            <input key={ph} placeholder={ph} readOnly style={{ padding: '12px 14px', border: `1px solid ${W_INK}`, background: 'transparent', fontSize: 14, outline: 'none', fontFamily: '"Space Grotesk", sans-serif' }} />
          ))}
          <select style={{ padding: '12px 14px', border: `1px solid ${W_INK}`, background: 'transparent', fontSize: 14, fontFamily: '"Space Grotesk", sans-serif' }}>
            <option>Primary focus — Biology</option>
            <option>Primary focus — Bio-engineering</option>
            <option>Primary focus — AI × Bio</option>
            <option>Other STEM</option>
          </select>
          <button type="button" style={{ marginTop: 6, background: W_NAVY, color: W_CREAM, border: 'none', padding: '14px 18px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Submit application →</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        background: W_INK, color: W_CREAM, padding: '40px 40px 28px',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <img src="assets/ksea-philly-seal.png" alt="" style={{ height: 42, filter: 'brightness(0) invert(1)' }} />
            <div style={{ fontSize: 16, fontWeight: 700 }}>KSEA Philadelphia</div>
          </div>
          <div style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.6, fontFamily: '"JetBrains Mono", monospace' }}>
            Philadelphia chapter of the Korean-American<br/>Scientists & Engineers Association.<br/>KSEA · Est. 1971 · 501(c)(3) non-profit.
          </div>
        </div>
        {[
          ['Chapter', ['About', 'Board', 'History', 'Bylaws']],
          ['Programs', ['Symposium', 'Seminars', 'Scholarship', 'Mentorship']],
          ['Connect', ['Newsletter', 'LinkedIn', 'KakaoTalk', 'Email us']],
        ].map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.5, marginBottom: 14 }}>{h}</div>
            {items.map(x => (<div key={x} style={{ fontSize: 13, marginBottom: 6 }}>{x}</div>))}
          </div>
        ))}
      </footer>
    </div>
  );
}

Object.assign(window, { KSEAWebsite, SiteSeal, W_NAVY, W_LIGHT, W_CREAM, W_BRICK, W_INK, W_PAPER, W_BIO });
