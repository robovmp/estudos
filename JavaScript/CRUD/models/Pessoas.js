const mongoose = require( 'mongoose' );

const Pessoas = mongoose.model( 'Person', {

    nome: String,
    soldo: Number,
    aprovado: Boolean,

} )

module.exports = Pessoas;