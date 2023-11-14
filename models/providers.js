const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true 
    },
    address: { 
        type: String, 
        required: true
    },
    url_web: { 
        type: String, 
        required: true, 
        unique: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const provider = mongoose.model('Provider', providerSchema);

module.exports = provider;


// Insertar un producto

//  const p = new Provider({
//     // id: 29,
//     // title: "Zumo de naranja",
//     // price: 1.80,
//     // description: "Cafe jugosa del teatro",
//     // image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
// });

// Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err)) 

// Product.find({}).then(data=>console.log(data));