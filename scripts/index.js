//store the products array in localstorage as "products"


// Got to inventory page Function

const show_products = document.querySelector('#show_products');
show_products.addEventListener("click", showProductFunc)
function showProductFunc() {
    window.location.href = "./inventory.html"
}


// Add Product Function

let dataArray = JSON.parse(localStorage.getItem("products")) || []


function ConstObj(type, desc, price, image) {
    this.type = type
    this.desc = desc
    this.price = price
    this.image = image
}

const add_product = document.querySelector('#add_product');
add_product.addEventListener("click", addProductFunc)
function addProductFunc() {
    event.preventDefault()

    let type = products.type.value
    let desc = products.desc.value
    let price = products.price.value
    let image = products.image.value

    if (type == "") {
        alert("Please Enter Type")
    }
    else if (desc == "") {
        alert("Please Enter Description")
    }
    else if (price == "") {
        alert("Please Enter Price")
    }
    else if (image == "") {
        alert("Please Enter Image URL")
    }
    else {
        let data = new ConstObj(type, desc, price, image)
        dataArray.push(data)
        localStorage.setItem("products", JSON.stringify(dataArray))

        products.type.value = ""
        products.desc.value = ""
        products.price.value = ""
        products.image.value = ""
    }

}