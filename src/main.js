import './style.css'
import { BugController, SpiderController, LightCrimsonUnderwingMothController, ApisMelliferaBeeController } from './bug.js';
import { initTimestamp } from './timestamp.js';

document.querySelector('#app').innerHTML = ``

const params = new URLSearchParams(window.location.search);

if (params.get('time') === 'true') {
    initTimestamp('datetime-overlay');
}

const flyCount = parseInt(params.get('fly'), 10);
if (!isNaN(flyCount)) {
    new BugController({
        'maxBugs': flyCount,
        'mouseOver':'multiply'
    });
}

const spiderCount = parseInt(params.get('spider'), 10);
if (!isNaN(spiderCount)) {
    new SpiderController({
        'maxBugs': spiderCount, 
    });
}

const mothCount = parseInt(params.get('moth'), 10);
if (!isNaN(mothCount)) {
    new LightCrimsonUnderwingMothController({
        'maxBugs': mothCount, 
        'mouseOver':'multiply'
    });
}

const beeCount = parseInt(params.get('bee'), 10);
if (!isNaN(beeCount)) {
    new ApisMelliferaBeeController({
        'maxBugs': beeCount, 
        'mouseOver':'multiply'
    });
}
