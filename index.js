newImage('sky.png', '0px', '430px','', '100%')
newImage('grass.png', '0px', '0px', '190px', '100%')

const inventory = newInventory()

const character = newImage('green-character/static.gif')

function handleDirectionChange(direction) {
    if (direction === 'null') {
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(300, 200, handleDirectionChange)   

    //adding images with arguments
move(newImage('boulder.png')).to("100", "250")
move(newImage('crate.png')).to("200", "200")
move(newImage('well.png')).to('600', '350')
move(newImage('tree.png')).to('200', '400')
move(newImage('tree.png')).to('1000', '400')
move(newImage('tree.png')).to('500', '200')
move(newImage('pine-tree.png')).to('400', '400')
move(newImage('pine-tree.png')).to('900', '200')
move(newImage('tree.png')).to('100', '50')
move(newImage('log.png')).to('700', '0')
move(newImage('pillar.png')).to('500', '-65')
move(newImage('pillar.png')).to('200', '-65')
move(newImage('boulder.png')).to('700', '300')

    //adding items with click event
    move(newItem('sword.png')).to('400', '200')
    move(newItem('sheild.png')).to('300', '300')
    move(newItem('staff.png')).to('500', '100')