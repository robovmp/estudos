const http = require( "http" );

const server = http.createServer( ( request, response ) => {

    response.writeHead( 200, { 'Content-Type': 'application/json' });

    response.end( JSON.stringify( {

        message: 'Minha primeira aplicação com NodeJs'

    } ) )

} );

server.listen( 1300, () => console.log( "Servidor criado!" ) );
