const cells = 31

const items = [
    {name: 'glock', img: '/public/glock.png', chance: 10* 10},
    {name: 'm4', img: '/public/m4.png', chance: 40* 10},
    {name: 'mp7', img: '/public/mp7.png', chance: 80* 10}
]

function getItem() {
    let item;

    while(!item){
        const chance = Math.floor(Math.random()* 100000)
        items.forEach(elm => {
            if(chance < elm.chance && !item) item = elm
        })
    }
    return item
}

function generateItems() {
    document.querySelector('.list').remove()
    document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
    `
    
    const list = document.querySelector('.list')

    for (let i = 0; i <cells; i++){
        const item = getItem()

        const li = document.createElement('li')
        li.classList.add('list__item')
        li.innerHTML = `
        <img src="${item.img}" alt=""/>
        `

        list.append(li)
    }
}


generateItems()

function start() {
    generateItems()
    const list = document.querySelector('.list')
    
   setTimeout(() => {
    list.style.left = '50%'
    list.style.transform = 'translate3d(-50%,0,0)'
    },0)

    const item = list.querySelectorAll('li')[15]

    list.addEventListener('transitionend', ()=> {
        item.classList.add('active')
    })
}