const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        validate: {
            validator: function(url){
                return url.endsWith('.jpg') || url.endsWith('.png');
            },
            message: "Por favor, solo imágenes JPG o PNG"
        }
    },
    // Agregamos un campo de referencia al proveedor
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'  // Nombre de la colección de proveedores
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;



// const mongoose = require('mongoose');
// require('../config/db_mongo') // Conexión a BBDD MongoDB

// const objectSchema = {
//     id: { 
//         type: Number, 
//         required: true,
//         unique: true
//     },
//     title: { 
//         type: String, 
//         required: true,
//         unique: true 
//     },
//     price: { 
//         type: Number, 
//         required: true 
//     },
//     description: { 
//         type: String, 
//         required: true 
//     },
//     image:{
//         type: String,
//         validate: {
//             validator: function(url){
//                 if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
//                     return true;
//                 else {
//                     return false;
//                 }
//             }, 
//             message: "Porfa, sólo imágenes JPG o PNG"
//         }
//     }
// };
// // Crear el esquema
// const productSchema = mongoose.Schema(objectSchema);


// // Crear el modelo --> Colección
// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;


// // Insertar un producto

//  const p = new Product({
//     id: 29,
//     title: "Zumo de naranja",
//     price: 1.80,
//     description: "Cafe jugosa del teatro",
//     image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
// });

// // Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err)) 

// Product.find({}).then(data=>console.log(data));