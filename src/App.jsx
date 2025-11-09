import React, { useEffect } from 'react';
import FadeIn from './components/FadeIn';
import heroBg from './assets/hero-abstract-light.svg';
import profileImg from './assets/profile.jpg';
import boardroomImg from './assets/boardroom.jpg';
import lucknowImg from './assets/lucknow.jpg';

const DATA = {
  name: 'Mayank Rana',
  role: 'Business Analyst',
  tagline: 'Converting data into actionable insights to drive informed business decisions.',
  email: 'ranamayank646@gmail.com',
  phone: '+91 8219488394',
  linkedin: 'https://www.linkedin.com/in/mayank-r-27371625a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  resume: process.env.PUBLIC_URL + '/assets/Mayank_Rana_CV_Business_Analyst.docx',
  pdf: process.env.PUBLIC_URL + '/assets/DISA_India_Analysis.pdf',
  dashboard: process.env.PUBLIC_URL + '/assets/financial_dashboard.html',
};

export default function App(){
  // simple parallax via CSS var
  useEffect(()=>{
    const onScroll = ()=>{
      const y = window.scrollY * 0.15;
      document.documentElement.style.setProperty('--parY', `${y}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Topbar */}
      <header className="topbar">
        <div className="wrap">
          <a href="#home" className="font-semibold tracking-tight">{DATA.name}</a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#projects" className="text-slate-700 hover:text-slate-900">Projects</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </nav>
          <a className="btn" href={DATA.resume} download>Download Resume</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: `translateY(var(--parY, 0px))`
      }}>
        <div className="container section" style={{position:'relative'}}>
          <div className="grid-2 items-center">
            <FadeIn>
              <div>
                <h1 className="h1 underline-animate">{DATA.role}</h1>
                <p className="lead mt-3">{DATA.tagline}</p>
                <div className="mt-7 flex gap-3">
                  <a href="#projects" className="btn">View Projects →</a>
                  <button className="btn-outline" onClick={()=>window.print()}>Download Portfolio (PDF)</button>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card flex items-center justify-center p-3">
                <img src={profileImg} alt="Profile" className="w-full h-80 object-contain rounded-2xl shadow" />
              </div>
            </FadeIn>
          </div>
          <div className="scroll-indicator">↓</div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section container">
        <div className="grid-2">
          <FadeIn>
            <div className="card">
              <h2 className="h2 underline-animate mb-2">Vision</h2>
              <p className="subtle">To leverage analytical insights to shape smarter, data-driven strategies that create sustainable business value.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card">
              <h2 className="h2 underline-animate mb-2">Mission</h2>
              <p className="subtle">To continuously transform raw data into actionable intelligence through effective visualization, structured analysis, and innovative problem-solving.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="section container">
        <div className="grid-2 items-start">
          <FadeIn>
            <div>
              <h2 className="h2 underline-animate mb-3">About</h2>
              <p>I'm an analytical Business Analyst with hands-on experience in data analysis, visualization, and decision enablement. I work with SQL, Power BI, and Excel to transform raw datasets into clear stories that guide business moves.</p>
              <p className="mt-3">Recently, I analysed DISA India Ltd.'s five-year financials, synthesized leverage signals from solvency ratios, and framed investment implications via WACC—packaged into dashboard-ready insights.</p>
              <div className="grid-2 mt-5">
                <div className="card">
                  <div className="font-semibold mb-1">Education</div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <div>
                      <div className="font-medium">MBA — Business Analytics</div>
                      <div className="subtle">Lovely Professional University (LPU)</div>
                    </div>
                    <div className="subtle">2025 – 2027</div>
                  </div>
                </div>
                <div className="card">
                  <div className="font-semibold mb-1">Certifications</div>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Business Analyst in Excel — Udemy</li>
                    <li>Python — Udemy</li>
                    <li>SQL — Udemy</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4">
              <img src={boardroomImg} alt="Workspace" className="rounded-xl border border-slate-200 w-full h-56 object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section container">
        <FadeIn><h2 className="h2 underline-animate mb-3">Skills</h2></FadeIn>
        <div className="grid-2">
          <FadeIn>
            <div className="card">
              <div className="font-semibold mb-2">Technical Skills</div>
              <ul className="chips">
                <li>Data Analysis</li>
                <li>Data Visualization</li>
                <li>Business Intelligence</li>
                <li>SQL</li>
                <li>Power BI</li>
                <li>Excel</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card">
              <div className="font-semibold mb-2">Soft Skills</div>
              <ul className="chips">
                <li>Communication</li>
                <li>Logical Thinking</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Listening</li>
                <li>Intellectual Curiosity</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section container">
        <FadeIn><h2 className="h2 underline-animate mb-3">Projects</h2></FadeIn>
        <div className="grid-2">
          <FadeIn>
            <div className="card">
              <img src={lucknowImg} alt="Lucknow Looms" className="rounded-lg border border-slate-200 w-full h-44 object-cover mb-2" />
              <div className="font-semibold">Unbrand → Brand: Lucknow Looms</div>
              <p className="subtle mt-1">Rebranding & go-to-market plan; positioning, SWOT and campaign roadmap.</p>
              <ul className="chips mt-2"><li>Marketing</li><li>Branding</li><li>Strategy</li></ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card">
              <div className="font-semibold">Financial Analysis — DISA India Ltd.</div>
              <p className="subtle mt-1">Five-year capital structure review with ratio deep-dive and WACC insights; includes interactive dashboard.</p>
              <ul className="chips mt-2"><li>Finance</li><li>WACC</li><li>Ratio Analysis</li><li>Excel</li></ul>
              <div className="mt-3 flex gap-2">
                <a className="btn-outline" href={DATA.pdf} target="_blank" rel="noreferrer">Open Report (PDF)</a>
              </div>
              <div className="mt-4">
                <iframe title="DISA Dashboard" className="w-full h-[60vh] rounded-xl border border-slate-200" src={DATA.dashboard}></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements */}
      <section className="section container">
        <FadeIn><h2 className="h2 underline-animate mb-3">Achievements & Highlights</h2></FadeIn>
        <div className="grid-3">
          <FadeIn><div className="card"><div className="font-semibold mb-1">Financial Dashboard (DISA)</div><p className="subtle">Built a 5-year dashboard synthesizing WACC and ratio insights to support strategic decisions.</p></div></FadeIn>
          <FadeIn delay={0.05}><div className="card"><div className="font-semibold mb-1">Lucknow Looms Branding</div><p className="subtle">Developed an Unbrand → Brand strategy with positioning, messaging, and campaign roadmap.</p></div></FadeIn>
          <FadeIn delay={0.1}><div className="card"><div className="font-semibold mb-1">Udemy Certifications</div><p className="subtle">Completed SQL, Python, and Excel courses focused on business analysis workflows.</p></div></FadeIn>
          <FadeIn delay={0.15}><div className="card"><div className="font-semibold mb-1">Power BI Dashboards</div><p className="subtle">Designed interactive BI dashboards to communicate financial KPIs and trends.</p></div></FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section container">
        <FadeIn>
          <h2 className="h2 underline-animate mb-3">Contact</h2>
          <p className="subtle">Have a data problem to solve or a dashboard to ship? Drop me a line — I’ll respond quickly.</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📧 <a className="text-blue-700 hover:underline" href={`mailto:${DATA.email}`}>{DATA.email}</a></li>
            <li>📞 <a className="text-blue-700 hover:underline" href={`tel:${DATA.phone}`}>{DATA.phone}</a></li>
            <li>🔗 <a className="text-blue-700 hover:underline" target="_blank" rel="noreferrer" href={DATA.linkedin}>LinkedIn</a></li>
          </ul>
          <div className="flex gap-2 mt-4">
            <a className="btn" href={DATA.resume} download>Download Resume</a>
            <button className="btn-outline" onClick={()=>window.print()}>Download Portfolio (PDF)</button>
          </div>
        </FadeIn>
      </section>

      <footer className="footer">© {new Date().getFullYear()} {DATA.name}. All rights reserved.</footer>
    </div>
  );
}
