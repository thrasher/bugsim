import './style.css'
import { initTimestamp } from './timestamp.js';

document.querySelector('#app').innerHTML = `
    <div id="datetime-overlay" style="position: fixed; top: 10px; left: 10px; background: black; color: white; padding: 5px 10px; font-family: monospace; z-index: 10000000; border-radius: 4px;"></div>
`

initTimestamp('datetime-overlay');

new BugController({
    'minBugs':1, 
    'minBugs':500, 
    'mouseOver':'multiply'
});

new SpiderController({
});

new LightCrimsonUnderwingMothController({
    'minBugs':1, 
    'minBugs':500, 
    'mouseOver':'multiply'
});

new ApisMelliferaBeeController({
    'minBugs':1, 
    'minBugs':500, 
    'mouseOver':'multiply'
});
