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