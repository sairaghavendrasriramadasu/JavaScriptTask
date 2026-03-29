
const orderlist = document.getElementsByClassName('maincontainer-list')[0]
const loadingEl = document.getElementsByClassName('loading')[0]
const searcEl = document.getElementsByClassName('search')[0]
const catogyFilterEl = document.getElementById('categoryfilter')
const sortEl = document.getElementById('sortPrice')
const modalEl = document.getElementById('modal')
const modalBodyEl = document.getElementById('modalBody')
const closeModal = document.getElementById("closeModal");

let allproducts = []


let fetchapi = 'https://fakestoreapi.com/products'

fetch(fetchapi)
.then((response) => {
    return response.json()
})

.then((data) => {
    console.log(data);

    loadingEl.style.display = 'none'

    allproducts = data
    displayproducts(data)

    
})

.catch((e) => {
    console.log(e);
    
})

function displayproducts(products) {
    orderlist.innerHTML = ''
     products.forEach((element,index)  => {
        let newdiv = document.createElement('li')
        newdiv.classList.add('card')

        newdiv.innerHTML = `
         <h1>${element.title.slice(0,20)}..</h1>
            <img src="${element.image}" width="100"/>
            <p>${element.description.slice(0,60)} more...</p>
            <div class='button-container'>
            <button>price : ${element.price} $</button>
            <button class='viewmore'>View More</button>
            </div>
        `

        newdiv.querySelector('.viewmore').addEventListener('click', () => {
            openModal(element)
        })
        
        orderlist.appendChild(newdiv)

    });
}

function allfilterProducts() {
    let sortValue = sortEl.value
    let categoryValue = catogyFilterEl.value
    let searchValue = searcEl.value.toLowerCase()

    let result = [...allproducts]

    // console.log(sortValue);

    if(searchValue) {
        result = result.filter(items => items.title.toLowerCase().includes(searchValue))
    }

    if (categoryValue) {
        result = result.filter(items => items.category === categoryValue)
        console.log(result);
        
    }

    if(sortValue === 'low') {
        result.sort((a, b) => a.price - b.price)
    } else if(sortValue === 'high') {
        result.sort((a, b) => b.price - a.price)
    }
    
    displayproducts(result)

}


function openModal(items) {
    modalEl.style.display = 'flex'

    modalBodyEl.innerHTML = `
    <h2>${items.title}</h2>
        <img src="${items.image}"/>
        <p><strong>Category:</strong> ${items.category}</p>
        <p>${items.description}</p>
        <h3>Price: ₹ ${items.price}</h3>

    `
    closeModal.addEventListener("click", () => {
    modalEl.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalEl) {
        modalEl.style.display = "none";
    }
});

}


sortEl.addEventListener('change', allfilterProducts)
catogyFilterEl.addEventListener('change', allfilterProducts)
searcEl.addEventListener('input', allfilterProducts)
