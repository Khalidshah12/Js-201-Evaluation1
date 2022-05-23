
// Show products in grid fromat

let dataArray = JSON.parse(localStorage.getItem("products"))

dataArray.forEach(function (elem, index) {

    const all_products = document.querySelector('#all_products');

    // div for append all details
    const box = document.createElement('div');
    box.setAttribute("class", "box")

    const image = document.createElement('img');
    image.src = elem.image

    const type = document.createElement('h4');
    type.innerText = elem.type

    const desc = document.createElement('p');
    desc.innerText = elem.desc

    const price = document.createElement('p');
    price.innerText = elem.price + ".00" + "/- Rs."

    const RemoveButton = document.createElement('button');
    RemoveButton.innerText = "Remove"
    RemoveButton.setAttribute("id", "remove_product")
    RemoveButton.addEventListener("click", function () {
        removeFunc(elem, index)
    })

    // appendind details in div
    box.append(image, type, desc, price, RemoveButton)
    all_products.append(box)
})

// remove functionality
function removeFunc(elem, index) {
    dataArray.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(dataArray))
    window.location.reload()
}


// add more products button functionality 

const add_more_product = document.querySelector('#add_more_product');
add_more_product.addEventListener("click", addMoreFunc)
function addMoreFunc() {
    window.location.href = "./index.html"
}