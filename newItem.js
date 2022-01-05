function newItem(image, left, bottom) {
    let item = newImage(image, left, bottom)

    item.addEventListener('dblclick', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = 'assets/' + image
        inventory.append(inventoryItem)
    })
    return item
}