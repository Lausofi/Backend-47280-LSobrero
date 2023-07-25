class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }


        //validaciones

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }



        const productCode = this.products.find(prod => prod.code === product.code)
        if (productCode) {
            console.log("Ya existe") //producto ya ingresado
        } else {
            if (Object.values(product).every(value => value)) {
                this.products.push(product); //agrega
            } else {
                console.log(" Error ") // falta algun campo
            }
        }
    }

    getProducts = () => {
        if (this.products.length === 0) {
            return console.log("esta vacio") // esta vacio
        } else {
            return this.products;
        }
    }

    getProductById = (id) => {

        const productId = this.products.find(product => product.id === id)

        console.log("Producto encontrado", productId);

        (!productId) ? console.log("No se encuentra producto") : console.log("Producto ya existe")
    }


}
