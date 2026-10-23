// Portfolio illustration only; the real planner lives in PoE2-Companion.
const root = document.querySelector<HTMLElement>('#pc-demo');
if (root) {
  const copy = JSON.parse(root.dataset.copy!) as { baseline: string; shortfall: string; overBudget: string; passed: string; reasons: string[] };
  const baseline = [90, 90, 90, 75];
  const ringDelta = [-30, -30, -30, -12];
  const bootsDelta = [30, 30, 30, 12];
  const budget = root.querySelector<HTMLSelectElement>('#pc-budget')!;
  let selection = 1;
  function render() {
    const values = baseline.map((value, index) => value + (selection > 0 ? ringDelta[index] : 0) + (selection === 2 ? bootsDelta[index] : 0));
    const cost = [0, 6, 10][selection];
    const capped = values.every(value => value >= 75);
    const affordable = cost <= Number(budget.value);
    root!.querySelector('#pc-cost')!.textContent = String(cost);
    root!.querySelectorAll<HTMLElement>('[data-resistance]').forEach((row, index) => {
      row.dataset.met = String(values[index] >= 75);
      row.querySelector('[data-raw]')!.textContent = `${values[index]}%`;
      row.querySelector('[data-effective]')!.textContent = `${Math.min(75, values[index])}%`;
    });
    root!.querySelectorAll<HTMLButtonElement>('[data-plan]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.plan) === selection)));
    root!.querySelector<HTMLElement>('.pc-result')!.dataset.state = capped && affordable ? 'pass' : 'fail';
    root!.querySelector('#pc-verdict')!.textContent = !affordable ? copy.overBudget : !capped ? copy.shortfall : selection === 0 ? copy.baseline : copy.passed;
    root!.querySelector('#pc-reason')!.textContent = copy.reasons[selection];
  }
  root.querySelectorAll<HTMLButtonElement>('[data-plan]').forEach(button => button.addEventListener('click', () => { selection = Number(button.dataset.plan); render(); }));
  budget.addEventListener('change', render);
  root.querySelectorAll<HTMLButtonElement>('[data-skill]').forEach(button => button.addEventListener('click', () => {
    root.querySelectorAll('[data-skill]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    root.querySelector('#pc-skill-detail')!.textContent = button.dataset.detail!;
  }));
  render();
}
document.querySelector('#pc-theme')?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('resume-theme', theme);
});
