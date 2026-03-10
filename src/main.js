import './style.css'
import { BugController, SpiderController, LightCrimsonUnderwingMothController, ApisMelliferaBeeController } from './bug.js';
import { initTimestamp } from './timestamp.js';

document.querySelector('#app').innerHTML = ``

const params = new URLSearchParams(window.location.search);

if (params.get('time') === 'true') {
    initTimestamp('datetime-overlay');
}

if (params.get('bug') === 'true') {
    new BugController({
        'minBugs':1, 
        'minBugs':500, 
        'mouseOver':'multiply'
    });
}

if (params.get('spider') === 'true') {
    new SpiderController({
    });
}

if (params.get('moth') === 'true') {
    new LightCrimsonUnderwingMothController({
        'minBugs':1, 
        'minBugs':500, 
        'mouseOver':'multiply'
    });
}

if (params.get('bee') === 'true') {
    new ApisMelliferaBeeController({
        'minBugs':1, 
        'minBugs':500, 
        'mouseOver':'multiply'
    });
}
