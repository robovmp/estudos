require ( 'dotenv' ).config();
const express = require( 'express' );
const mongoose = require( 'mongoose' );

const app = express();

const Pessoas = require( './models/Pessoas' );
const pessoasRouter = require( './routes/pessoasRoutes' )

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

app.use( '/pessoas', pessoasRouter )


app.get( '/', ( req, res )=>{

    res.json( { message: 'oi Express!' } );

} )




mongoose.connect( process.env.CONEXAO )
    .then( ()=> {

        console.log( 'Conectamos ao MongoDB!' );
        
        app.listen( 3000 );
    } )
    .catch( ( e ) => console.log( e )  );
