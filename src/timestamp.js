export function initTimestamp(elementId) {
  let element = document.getElementById(elementId);
  if (!element) {
    element = document.createElement('div');
    element.id = elementId;
    element.style.position = 'fixed';
    element.style.top = '10px';
    element.style.left = '10px';
    element.style.background = 'black';
    element.style.color = 'white';
    element.style.padding = '5px 10px';
    element.style.fontFamily = 'monospace';
    element.style.zIndex = '10000000';
    element.style.borderRadius = '4px';
    document.body.appendChild(element);
  }

  function updateDateTime() {
    const now = new Date();
    element.textContent = now.toLocaleString();
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
}
