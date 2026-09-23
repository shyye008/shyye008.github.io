document.querySelectorAll('.main-nav a').forEach(link => {
  if (location.pathname.startsWith('/research/') && link.getAttribute('href') === '/research/') link.setAttribute('aria-current', 'page');
});
const search = document.getElementById('publication-search');
if (search) {
  const entries = [...document.querySelectorAll('.publication-section li')];
  const sections = [...document.querySelectorAll('.publication-section')];
  const count = document.getElementById('publication-count');
  const empty = document.getElementById('no-results');
  document.querySelector('.publication-tools').hidden = false;
  function filter() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let shown = 0;
    entries.forEach(item => {
      item.hidden = !terms.every(term => item.textContent.toLowerCase().includes(term));
      if (!item.hidden) shown++;
    });
    sections.forEach(section => { section.hidden = ![...section.querySelectorAll('li')].some(item => !item.hidden); });
    count.textContent = `${shown} of ${entries.length} publications`;
    empty.hidden = shown !== 0;
  }
  search.addEventListener('input', filter);
  filter();
}
