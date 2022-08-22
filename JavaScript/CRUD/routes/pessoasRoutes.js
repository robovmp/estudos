const Pessoas = require('../models/Pessoas');

const router = require( 'express' ).Router();

router.post( '/', async ( req, res ) =>{

    const { nome, soldo, aprovado } = req.body;
    
    if( !nome ) { 
        res.status( 422 ).json( { error: 'Nome requerido' } )
    }

    const pessoa = { 
        nome, 
        soldo,
        aprovado
    }


    try {

        await Pessoas.create( pessoa );

        res.status( 201 ).json( { mensagem: 'Pessoa inserida' } );
        
    } catch (error) {
        res.status( 500 ).json( { error: error } );
    }

} )

router.get( '/', async ( req, res )=>{

    try {
        const pessoas = await Pessoas.find();

        res.status( 200 ).json( pessoas );

    } catch (error) {

        res.status( 500 ).json( { error: error } )
        
    }


} )

router.patch( '/:id', async ( req, res )=>{

    const id = req.params.id

    const { nome, soldo, aprovado } = req.body

    const pessoa = {
        nome,
        soldo,
        aprovado
    }

    try {

        const editarPessoa = await Pessoas.updateOne( { _id: id }, pessoa );

        res.status( 200 ).json( pessoa )

    } catch (error) {
        
        res.status( 500 ).json( { error: error } );

    }

} )

router.delete( '/:id', async ( req, res )=>{

    const id = req.params.id

    const pessoas = await Pessoas.findOne( { _id:id } )

    try {
        await Pessoas.deleteOne( { _id: id } )

        res.status( 200 ).json( { mensagem: 'Usuário deletado' } )
    } catch (error) {
        res.status( 500 ).json( { error: error } )
    }

} )


module.exports = router;