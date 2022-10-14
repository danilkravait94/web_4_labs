import React from "react"
function Image() {
    const increase = () => {
        const images = document.querySelectorAll('img#city-image');
        if (images.length > 0) {
            images[images.length - 1].style.width = '600px';
        }
    }
    const decrease = () => {
        const images = document.querySelectorAll('img#city-image');
        if (images.length > 0) {
            images[images.length - 1].style.width = '300px';
        }
    }
    const remove = () => {
        const images = document.querySelectorAll('img#city-image');
        if (images.length > 0) {
            images[images.length - 1].remove()
        }
    }
    const add = () => {
        const img = document.createElement('img');
        img.src = 'https://chernihiv.travel/cache/files/100/da/da48be02b28a4b3a0bfb8791e52f7b8d/400_400/kater.jpg';
        img.id = 'city-image'
        const imageBlock = document.getElementById('image-block');
        imageBlock.append(img)
    }
    return (
        <div>
            <div id="image-block">
                <a href="https://chernihiv.travel/ua">
                    <img id="city-image" src="https://chernihiv.travel/cache/files/100/da/da48be02b28a4b3a0bfb8791e52f7b8d/400_400/kater.jpg" alt="city" />
                </a>
            </div>
            <div>
                <button id="add" onClick={add}>Додати</button>
                <button id="delete" onClick={remove}>Видалити</button>
                <button id="increace" onClick={increase}>Збільшити</button>
                <button id="decreace" onClick={decrease}>Зменшити</button>
            </div>
        </div>
    )
}

export default Image;