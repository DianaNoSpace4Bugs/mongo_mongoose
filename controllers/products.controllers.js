const Product = require('../models/products');

// CREATE
const createProduct = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let product = await new Product(data).save();

        // Utiliza populate() para obtener los datos del proveedor
        await product.populate('provider', '_id').execPopulate();

        // Devuelve un objeto con los datos del producto y un status 200
        res.status(200).json({ message: "Producto creado", product: product });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// const createProduct = async (req, res) => {
//     console.log(req.body);

//     try{
//         const data = req.body;
//         let answer = await new Product(data).save();
//         res.status(201).json({message: "proveedor creado", product:{answer}});

//     }catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//         res.status(400).json({msj:`ERROR: ${error.stack}`});
//     }
// }

// READ
const getProduct = async (req, res) => {
        try {
            
            let product = await Product.find({},'-_id');
            res.status(200).json(product); // 
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// UPATE
const editProduct = (req, res) => {
    let productInfo = req.body;
    res.status(200).json({message:`proveedor actualizado: ${productInfo.company_name}`, product:{productInfo}});
}

// DELETE
const deleteProduct = (req, res) => {
    res.status(200).json({message: `Se ha borrado el proveedor: ${req.param.company_name}`});
}

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
}

// .populate('provider', 'company_name cif address -_id') //selector en singular de la coleccion que quieres relacionar,