function newNonPlayableCharacter(x, y,) {
    let element = newImage('red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if(direction === 'west'){
            x-=1
            if (x === -57) {
                x+=1423 // returns to other side of page
            }
        }
        if(direction === 'north'){
            y+=1
            if(y === 631){
                y-=721
            }
        }
        if(direction === 'east'){
            x+=1
            if(x === 1366){
                x-=1423
            }
        }
        if(direction === 'south'){
            y-=1
            if(y === -88){
                y+=721
            }
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        stop()
       
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop()
        
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}