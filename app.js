const express = require('express');
const app = express();
const port = 3000;

// morgan
// const morgan = require('./middlewares/morgan');
// app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// 
app.use(express.json()); // Habilito recepción de JSON en servidor

const providersRoutes = require('./routes/providers.routes')
// const productsRoutes = require('./routes/products.routes')

const Product = require('./models/products');
const Provider = require('./models/providers');

app.use('/',providersRoutes)
// app.use('/',productsRoutes)

// Crear publisher/compañía
async function createProvider(company_name, CIF, address, url_web) {
    const providerObject = new Provider({
        company_name,
        CIF,
        address, 
        url_web
    });

    const result = await providerObject.save();
    
}

// Crear juego pasando título + id_publisher por parámetro
async function createProduct(id, title, price, description, image, provider) {
    const productObject = new Product({
        id,
        title,
        price,
        description,
        image,
        provider
    });

    const result = await productObject.save();
    
}

// createProvider('inditex','12345A','calle de la desgracia 5','www.nopodemosmas.com');
// createProvider('suyman','56789P','calle de la desesperacion 5','www.sos.com');

// createProduct('67695','Camiseta', 5,'color:rosa','https://bestfriends.org/sites/default/files/styles/story_mobile_530_x_298/public/story_images/FirstKittensFoster1501sak_1124x554.jpg')
// createProduct('38571','Pantalon', 6,'color:azul','https://bestfriends.org/sites/default/files/styles/image_mobile_square/public/image/WaffleLove1384sak_1.jpg')
// createProduct('74101','Vestido', 6,'color:azul','https://bestfriends.org/sites/default/files/styles/image_mobile_square/public/image/WaffleLove1384sak_1.jpg', 'inditex')



// Crear juego pasando titulo + nombre de compañía por parámetro
// async function createGame2(title, companyName) {

//     const publisher = await Publisher.find({companyName});
//     const publisher_id = publisher[0]._id.toString();    

//     const game = new Game({
//         title,
//         publisher:publisher_id
//     });

//     const result = await game.save();
//     console.log(result);
// }

// Listar juegos. Uso de populate()
// async function listGames() {
//     const games = await Game
//         .find()
//         .populate('publisher', 'companyName -_id')
//         .select('title publisher -_id');
//     console.log(games);
// }

// async function listProviders() {
//     const providers = await Provider
//         .find()
//         .populate('Product', 'product_id -_id')
//     console.log(providers);
// }


// createPublisher('Nintendo', true, 'https://www.nintendo.com/');
// createPublisher('Sony', true, 'https://www.sony.com/');
// createPublisher('Sega', true, 'https://www.sega.com/');


//createGame('Sonic the Hedgehog', '62ea5c8deb0cc4db1eb95366');
//createGame('Donkey Kong', '62ea5c8deb0cc4db1eb95364');
//createGame('Pro evolution Soccer 5', '623a1ee700bba314366df2e4');


//Crear juego buscando primero el ID de Sony
/* company.find({companyName:"Sony"}, function(err, docs) {
    if (err) {
        console.log(err);
    } else {
        var id = docs[0]._id;
        console.log(id.toString());
        createGame('Crash Bandicoot 2', id); // Crear el juego

    }
}); */

//Crear juego pasando el ID de Sony
// createGame2('Crash Bandicoot 3', 'Sony');

//Crear juego pasando el ID de Sony
// createGame2('Tetris', 'Nintendo');

// Listar todos los juegos
// listGames();
// listProviders();


app.listen(port, () => {
    console.log(`Estoy en el puerto http://localhost:${port}`)
       
  })