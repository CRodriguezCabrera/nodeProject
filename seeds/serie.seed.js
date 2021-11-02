const mongoose = require('mongoose');
const Serie = require("../app/api/models/Serie.model");

const dotenv = require('dotenv');
dotenv.config();

const serie = [
    {
        name: 'como conocí a vuestra madre',
        genre: 'Comedia',
        poster: 'https://pics.filmaffinity.com/C_mo_conoc_a_vuestra_madre_Serie_de_TV-740256945-large.jpg',
        year: 2005,
    },
    {
        name: 'locke and key',
        genre: 'drama, sobrenatural',
        poster: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/locke-and-key-cartel-1580993042.jpg?resize=980:*',
        year: 2020,
    },
    {
        name: 'El juego del calamar',
        genre: 'acción, supervivencia',
        poster: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/09/el-juego-del-calamar.jpeg?fit=1960%2C1306&ssl=1',
        year: 2021,
    },
    {
        name: 'Big bang theory',
        genre: 'comedia',
        poster: 'https://images-na.ssl-images-amazon.com/images/I/91-MvPsX1aL.jpg',
        year: 2007,
    },
    {
        name: 'Juego de tronos',
        genre: 'fantasia, acción',
        poster: 'https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40',
        year: 2011,
    }
    

];
const serieDocuments = serie.map(serie => new Serie(serie));
mongoose
    .connect('mongodb+srv://root1234:root1234@cluster0.8qwfh.mongodb.net/upgrade_series?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allSerie = await Serie.find();
        if (allSerie.length) {
            await Serie.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Serie.insertMany(serieDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());