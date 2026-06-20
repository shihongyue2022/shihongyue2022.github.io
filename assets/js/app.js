const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[char]));

const safeUrl = value => {
  if (!value) return '';
  try {
    const url = new URL(value, window.location.href);
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
};

const renderProfile = profile => {
  document.querySelectorAll('[data-profile]').forEach(node => {
    const value = profile[node.dataset.profile];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-profile-image]').forEach(node => {
    const value = safeUrl(profile[node.dataset.profileImage]);
    if (value) node.src = value;
  });
  document.title = `${profile.name} · ${profile.role}`;
  const email = profile.email && !profile.email.startsWith('your-') ? profile.email : '';
  const emailLink = document.querySelector('#email-link');
  if (email) emailLink.href = `mailto:${email}`;
  else emailLink.href = 'https://github.com/shihongyue2022';

  const socialContainer = document.querySelector('#social-links');
  socialContainer.innerHTML = (profile.socials || []).map(item => {
    const url = safeUrl(item.url);
    return url ? `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(item.label)} ↗</a>` : '';
  }).join('');
  const github = (profile.socials || []).find(item => item.label.toLowerCase() === 'github');
  if (github && safeUrl(github.url)) document.querySelector('#github-link').href = safeUrl(github.url);
};

const renderSkills = skills => {
  document.querySelector('#skills-list').innerHTML = skills.map(group => `
    <section class="skill-group">
      <h3>${escapeHtml(group.category)}</h3>
      <div class="skill-tags">${group.items.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div>
    </section>`).join('');
};

const renderExperience = experience => {
  document.querySelector('#experience-list').innerHTML = experience.map(item => `
    <article class="timeline-item reveal">
      <p class="timeline-meta">${escapeHtml(item.period)} · ${escapeHtml(item.location)}</p>
      <h3>${escapeHtml(item.role)}</h3>
      <h4>${escapeHtml(item.company)}</h4>
      <p>${escapeHtml(item.description)}</p>
      ${item.highlights?.length ? `<ul>${item.highlights.map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul>` : ''}
    </article>`).join('');
};

const renderEducation = education => {
  document.querySelector('#education-list').innerHTML = education.map(item => `
    <article class="education-card reveal">
      <p class="period">${escapeHtml(item.period)}</p>
      <h3>${escapeHtml(item.school)}</h3>
      <h4>${escapeHtml(item.degree)}</h4>
      <p>${escapeHtml(item.description)}</p>
    </article>`).join('');
};

const renderProjects = projects => {
  document.querySelector('#projects-list').innerHTML = projects.map((project, index) => `
    <article class="project-card reveal">
      <span class="project-number">PROJECT / ${String(index + 1).padStart(2, '0')}</span>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      ${project.impact ? `<p class="project-impact">${escapeHtml(project.impact)}</p>` : ''}
      <div class="project-footer">
        <div class="skill-tags">${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
        <div class="project-links">
          ${safeUrl(project.repoUrl) ? `<a href="${safeUrl(project.repoUrl)}" target="_blank" rel="noreferrer" aria-label="查看 ${escapeHtml(project.name)} 源码">源码 ↗</a>` : ''}
          ${safeUrl(project.demoUrl) ? `<a href="${safeUrl(project.demoUrl)}" target="_blank" rel="noreferrer" aria-label="查看 ${escapeHtml(project.name)} 演示">演示 ↗</a>` : ''}
        </div>
      </div>
    </article>`).join('');
};

const renderCertificates = certificates => {
  const container = document.querySelector('#certificates-list');
  const empty = document.querySelector('#certificate-empty');
  if (!certificates.length) {
    container.hidden = true;
    empty.hidden = false;
    return;
  }
  container.innerHTML = certificates.map(cert => {
    const url = safeUrl(cert.verifyUrl) || '#';
    const image = cert.image ? `<img class="certificate-image" src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.name)} 徽章" loading="lazy" />` : `<span class="certificate-placeholder">✓</span>`;
    return `<a class="certificate-card reveal" href="${url}" ${url !== '#' ? 'target="_blank" rel="noreferrer"' : ''}>
      ${image}<span class="certificate-arrow">↗</span>
      <h3>${escapeHtml(cert.name)}</h3>
      <p>${escapeHtml(cert.issuer)} · ${escapeHtml(cert.issuedAt)}</p>
      ${cert.credentialId ? `<p>编号：${escapeHtml(cert.credentialId)}</p>` : ''}
    </a>`;
  }).join('');
};

const setTheme = theme => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('resume-theme', theme);
};

const initControls = () => {
  const initialTheme = localStorage.getItem('resume-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(initialTheme);
  document.querySelector('.theme-toggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); });
  document.querySelector('#current-year').textContent = new Date().getFullYear();
};

const init = async () => {
  initControls();
  try {
    const response = await fetch('data/resume.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderProfile(data.profile);
    renderSkills(data.skills || []);
    renderExperience(data.experience || []);
    renderEducation(data.education || []);
    renderProjects(data.projects || []);
    renderCertificates(data.certificates || []);
  } catch (error) {
    console.error(error);
    document.querySelector('#load-error').hidden = false;
  }
};

init();
