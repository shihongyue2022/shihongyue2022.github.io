const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const entry = (title, subtitle, period, description, highlights = []) => `
  <article class="resume-entry">
    <div class="resume-entry-header"><h3>${esc(title)}</h3><span class="period">${esc(period)}</span></div>
    <h4>${esc(subtitle)}</h4>
    ${description ? `<p>${esc(description)}</p>` : ''}
    ${highlights.length ? `<ul>${highlights.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
  </article>`;

fetch('data/resume.json').then(response => response.json()).then(data => {
  const { profile, skills = [], experience = [], education = [], projects = [], certificates = [] } = data;
  document.title = `${profile.name}的简历`;
  document.querySelector('#resume-name').textContent = profile.name;
  document.querySelector('#resume-role').textContent = profile.role;
  document.querySelector('#resume-summary').textContent = profile.summary;
  const contacts = [profile.location, profile.phone, profile.email && !profile.email.startsWith('your-') ? profile.email : '', ...(profile.socials || []).map(item => item.url)].filter(Boolean);
  document.querySelector('#resume-contact').innerHTML = contacts.map(value => value.startsWith('http') ? `<a href="${esc(value)}">${esc(value.replace(/^https?:\/\//, ''))}</a>` : `<span>${esc(value)}</span>`).join('');
  document.querySelector('#resume-experience').innerHTML = experience.map(item => entry(item.role, `${item.company} · ${item.location}`, item.period, item.description, item.highlights)).join('');
  document.querySelector('#resume-projects').innerHTML = projects.map(item => entry(item.name, item.tags.join(' · '), '', item.description, item.impact ? [item.impact] : [])).join('');
  document.querySelector('#resume-skills').innerHTML = skills.map(group => `<div class="resume-skill"><h3>${esc(group.category)}</h3><p>${group.items.map(esc).join(' · ')}</p></div>`).join('');
  document.querySelector('#resume-education').innerHTML = education.map(item => entry(item.school, item.degree, item.period, item.description)).join('');
  document.querySelector('#resume-certificates').innerHTML = certificates.length ? certificates.map(item => entry(item.name, item.issuer, item.issuedAt, '')).join('') : '<p style="font-size:.68rem;color:#58645d">待补充</p>';
}).catch(() => {
  document.querySelector('.resume-sheet').innerHTML = '<p>数据加载失败，请通过本地静态服务器打开页面。</p>';
});
