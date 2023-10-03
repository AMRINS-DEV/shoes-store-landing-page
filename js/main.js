function slider() {
    const [...imgHolder] = document.querySelectorAll('.imgHolder')
    const left = document.querySelector('.slide .bigImg .btns .left')
    const right = document.querySelector('.slide .bigImg .btns .right')
    const mainSheo = document.querySelector('.mainSheo')
    let time = 4000
    let item = 0
    let arr = [1, 2, 3, 4]

    for (let i = 0; i < arr.length; i++) {
        imgHolder[i].children[0].src = `./assets/imgs/slider/${arr[i]}.png`
    }

    left.addEventListener('click', function () {
        arr.shift()
        arr.push(item)
        if (item < arr.length) item++
        else item = 0

        for (let i = 0; i < arr.length; i++) {
            imgHolder[i].innerHTML = `<img class="fromRightAnimation" src="./assets/imgs/slider/${arr[i]}.png" alt="">`
        }
        mainSheo.innerHTML = `<img class="displayed scallAnimation" src="./assets/imgs/slider/${item}.png" alt="">`
    })
    setInterval(function () {
        arr.shift()
        arr.push(item)
        if (item < arr.length) item++
        else item = 0

        for (let i = 0; i < arr.length; i++) {
            imgHolder[i].innerHTML = `<img class="fromRightAnimation" src="./assets/imgs/slider/${arr[i]}.png" alt="">`
        }
        mainSheo.innerHTML = `<img class="displayed scallAnimation" src="./assets/imgs/slider/${item}.png" alt="">`
    }, time)

    right.addEventListener('click', function () {
        arr.pop()
        arr.unshift(item)
        if (item > 0) item--
        else item = arr.length

        for (let i = 0; i < arr.length; i++) {
            imgHolder[i].innerHTML = `<img class="fromLeftAnimation" src="./assets/imgs/slider/${arr[i]}.png" alt="">`
        }
        mainSheo.innerHTML = `<img class="displayed scallAnimation" src="./assets/imgs/slider/${item}.png" alt="">`
    })
}

slider()

function addProducts() {
    const parent = document.querySelector('#collection-section > div')
    for (let i = 1; i <= 30; ++i)
    {
        parent.innerHTML +=
        `
        <article>
        <div class="top">
            <img src="./assets/imgs/all/img (${i}).png" alt="">
            <h2>
                <i class="fa-solid fa-dollar-sign"></i> 
                42.00
                <span>
                    <i class="fa-solid fa-dollar-sign"></i> 
                    66.00
                </span>
            </h2>
        </div>
        <div class="title">
            <h1>Air Max pegasus 37</h1>
        </div>
    </article>
        `
    }
}

addProducts()