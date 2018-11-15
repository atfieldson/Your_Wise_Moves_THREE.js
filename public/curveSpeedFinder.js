let speedArchitect = (max, subSteps) => {
    let blueprint = [];
    let speeds = [.01, .02, .04, .07, .12, .15, .18, .15, .12, .07, .04, .02, .01];
    debugger;
    let subSpeeds = speeds.map(speed => speed/subSteps);
    let currentPoint = 0;
    blueprint.push(currentPoint);
    for (let speed of subSpeeds) {
        for (let i = 0; i < subSteps; i++){
            currentPoint = currentPoint + max*speed;
            blueprint.push(currentPoint);
        }
    }
    return blueprint;
}

let curveSpeedFinder = (max, subSteps) => {
    
}

