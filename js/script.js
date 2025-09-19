const projects = [
  {
    title: 'Irish Expert – Head of Marketing',
    period: 'Nov 2023 – May 2024',
    location: 'Delhi, India',
    poster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    highlights: [
      'Spearheaded AI-powered marketing automation workflows, boosting lead conversion rates by 35% and reducing CPL by 28%.',
      'Designed omni-channel campaigns that drove a 40% increase in ROI within 6 months.',
      'Led a team of designers, analysts, and developers to deliver scalable marketing campaigns.'
    ]
  },
  {
    title: 'Skills Caravan LXP – Marketing Manager',
    period: 'Apr 2023 – Nov 2023',
    location: 'Delhi, India',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    highlights: [
      'Implemented marketing automation and CRM-based lead nurturing, increasing MQL-to-SQL conversion by 30%.',
      'Drove SEO strategy resulting in top 3 SERP rankings and 60% organic traffic growth.'
    ]
  },
  {
    title: 'xMonks – Assistant Digital Marketing Manager',
    period: 'Nov 2021 – Mar 2023',
    location: 'Gurugram, India',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    highlights: [
      'Designed automation-driven lead funnels, boosting qualified leads by 45% YoY.',
      'Managed paid campaigns delivering 5x ROAS.'
    ]
  },
  {
    title: 'NetCom Learning – Growth Marketing Associate',
    period: 'Jan 2020 – Oct 2020',
    location: 'Noida, India',
    poster: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    highlights: [
      'Launched performance marketing campaigns improving lead pipeline by 50% within 3 quarters.',
      'Developed account-based marketing strategies for enterprise deals.'
    ]
  }
];

const skills = [
  'Marketing Automation (HubSpot, Zoho, Marketo)',
  'Performance Marketing (SEO, SEM, Paid Media)',
  'ROI & Revenue Attribution Modeling',
  'AI in Marketing & Predictive Analytics',
  'CRO & Lead Nurturing',
  'Customer Journey Mapping',
  'Data-Driven Storytelling & Analytics',
  'Growth Hacking & GTM Strategies'
];

function init(){
  const carousel = document.getElementById('carousel');
  projects.forEach((p, idx)=>{
    const card = document.createElement('div');
    card.className = 'poster';
    card.setAttribute('data-index', idx);
    card.innerHTML = `<img src="${p.poster}" alt="${p.title}"/><div class="poster-badge"><strong>${p.title}</strong></div>`;
    carousel.appendChild(card);
  });

  // Carousel navigation
  const prev = document.querySelector('.nav.prev');
  const next = document.querySelector('.nav.next');
  prev.addEventListener('click', ()=>scrollCarousel(-1));
  next.addEventListener('click', ()=>scrollCarousel(1));
  carousel.addEventListener('keydown', handleKeyNav);

  // Poster click -> open modal
  carousel.addEventListener('click', (e)=>{
    const p = e.target.closest('.poster');
    if(!p) return;
    openModal(Number(p.dataset.index));
  });

  const skillGrid = document.querySelector('.skill-grid');
  skills.forEach(s=>{
    const el = document.createElement('div');
    el.className='skill';
    el.textContent = s;
    skillGrid.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded',init);

function scrollCarousel(direction){
  const carousel = document.getElementById('carousel');
  const width = 220; // approx poster + gap
  carousel.scrollBy({left: direction * width * 2, behavior: 'smooth'});
}

function handleKeyNav(e){
  if(e.key === 'ArrowRight') scrollCarousel(1);
  if(e.key === 'ArrowLeft') scrollCarousel(-1);
}

function openModal(index){
  const data = projects[index];
  const modal = document.getElementById('modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `<h2>${data.title}</h2><p><em>${data.period} • ${data.location}</em></p><ul>${data.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>`;
  modal.setAttribute('aria-hidden','false');
  modal.querySelector('.modal-close').onclick = ()=>closeModal();
  modal.onclick = (ev)=>{ if(ev.target.id === 'modal') closeModal(); };
}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','true');
}