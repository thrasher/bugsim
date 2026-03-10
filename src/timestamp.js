export function initTimestamp(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  function updateDateTime() {
    const now = new Date();
    element.textContent = now.toLocaleString();
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
}
