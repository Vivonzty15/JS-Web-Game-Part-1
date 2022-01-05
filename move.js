function move(image) {
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        image.style.left = left + "px"
        image.style.bottom = bottom + "px"
    }

    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null
        let x = left 
        let y = bottom

        image.style.left = x + 'px'
        image.style.bottom = y + 'px'

        function moveCharacter() {
            if(direction === 'west'){
                x-=1
                if (x === -57) {
                    x+=1423
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
            image.style.left = x + 'px'
            image.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if (callback === handleDirectionChange){
                callback(direction)
            }
        })
        
        document.addEventListener('keyup', function(){
            direction = null
            if (callback === handleDirectionChange){
                callback(direction)
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
} 