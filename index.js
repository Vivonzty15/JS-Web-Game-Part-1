newImage('sky.png', '0px', '430px','', '100%')
newImage('grass.png', '0px', '0px', '190px', '100%')

const inventory = newInventory()

const pc = newPlayableCharacter(100, 110)

const npc = newNonPlayableCharacter(50, 300) 

// asychronous code
    npc.walkNorth(500, () => {
        npc.walkEast(500, () => {
            npc.walkSouth(200, () => {
                npc.walkEast(1100, () => {
                    npc.walkSouth(750, () => {
                        npc.walkEast(1600, () => {
                            npc.walkNorth(900, () => {
                                npc.walkEast(500, () => {
                                    npc.walkSouth(100, () => {
                                        npc.walkEast(1200, () => {
                                            npc.walkSouth(800, () => {
                                                npc.walkWest(3500, () => {
            
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

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