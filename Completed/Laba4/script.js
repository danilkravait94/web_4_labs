function click_on_line10 () {
    const line10 = document.getElementById('line-10')
    line10.style.background = line10.style.background  === "blue" ? "yellow" : "blue" ;
    line10.style.color = line10.style.background  === "blue" ? "white" : "black" ;
}

function click_on_line11 () {
    const line11 = document.querySelector('#films-block > p.line-11')
    line11.style.background = line11.style.background  === "yellow" ? "blue" : "yellow";
    line11.style.color = line11.style.background  === "blue" ? "white" : "black" ;
}

function add() {
    const img = document.createElement('img');
    img.src = 'https://chernihiv.travel/cache/files/100/da/da48be02b28a4b3a0bfb8791e52f7b8d/400_400/kater.jpg';
    img.id = 'city-image'
    const imageBlock = document.getElementById('image-block');
    imageBlock.append(img)
}

function remove() {
    const images = document.querySelectorAll('img#city-image');
    if (images.length > 0) {
        images[images.length - 1].remove()
    }
}

function increase() {
    const images = document.querySelectorAll('img#city-image');
    if (images.length > 0) {
        images[images.length - 1].style.width = '600px';
    }
}

function decrease() {
    const images = document.querySelectorAll('img#city-image');
    if (images.length > 0) {
        images[images.length - 1].style.width = '300px';
    }
}
