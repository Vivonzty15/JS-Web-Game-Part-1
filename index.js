function newImage(image, left, bottom, top, width) {
    let img = document.createElement('img')
    document.body.append(img)
    img.src = 'assets/' + image
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    img.style.top = top
    img.style.width = width
    return img
}

function newItem(image, left, bottom) {
    let item = newImage(image, left, bottom)

    item.addEventListener('dblclick', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = 'assets/' + image
        inventory.append(inventoryItem)
    })
}

let inventory = document.createElement('div')

function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px'
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}
    

    //adding images with arguments

newImage('sky.png', '0px', '430px','', '100%')

newImage('grass.png', '0px', '0px', '190px', '100%')

newImage('crate.png', '200px', '200px')
newImage('well.png', '600px', '350px')
newImage('green-character.gif', '300px', '200px')
newImage('green-character.gif', '1100px', '280px')
newImage('red-character.gif', '600px', '200px')
newImage('green-character.gif', '300px', '50px')
newImage('green-character.gif', '100px', '300px')

newImage('tree.png', '200px', '400px')
newImage('tree.png', '1000px', '400px')
newImage('tree.png', '500px', '200px')
newImage('pine-tree.png', '400px', '400px')
newImage('pine-tree.png', '900px', '200px')
newImage('tree.png', '100px', '50px')

newImage('log.png', '700px', '0px')

newImage('pillar.png', '500px', '-65px')
newImage('pillar.png', '200px', '-65px')

newImage('boulder.png', '700px', '300px')

    //adding items with click event
newItem('sword.png', '400px', '200px')

newItem('sheild.png', '300px', '300px')

newItem('staff.png', '500px', '100px')

newInventory()