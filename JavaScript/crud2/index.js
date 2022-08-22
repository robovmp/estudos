require ( 'dotenv' ).config();

const express = require( 'express' );
const mongoose = require( 'mongoose' );

const app = express();

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );


app.get( '/', ( req, res )=>{
    res.json( { mensagem: 'funfou?' } )
} )

mongoose.connect( process.env.CONEXAO )
    .then( ()=>{
        console.log( 'Conectado ao banco' );
        app.listen( 3000 )
    }
    ).catch( (e)=> {
        console.log(e);
    } )