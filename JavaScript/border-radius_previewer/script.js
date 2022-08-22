var supEsq;
var supDir;
var infDir;
var infEsq;

function setBorder ( e ) {

    if( e.target.id == "supEsq" ) {

        document.getElementById( "area" ).style.borderTopLeftRadius = e.target.value + "%";
        supEsq = e.target.value;
        setLabel(supEsq, e.target.id);

    } else if( e.target.id == "supDir" ) {

        document.getElementById( "area" ).style.borderTopRightRadius = e.target.value + "%";
        supDir = e.target.value;
        setLabel(supDir, e.target.id);

    } else if( e.target.id == "infDir" ) {

        document.getElementById( "area" ).style.borderBottomRightRadius = e.target.value + "%";
        infDir = e.target.value;
        setLabel(infDir, e.target.id);

    } else {

        document.getElementById( "area" ).style.borderBottomLeftRadius = e.target.value + "%";
        infEsq = e.target.value;
        setLabel(infEsq, e.target.id);

    }


}   

function setLabel ( value,id ) {

    if( id == "supEsq" ) {

        document.getElementById( "labelSupEsq" ).setAttribute( 'value', value );

    } else if( id == "supDir" ) {

        document.getElementById( "labelSupDir" ).setAttribute( 'value', value );

    } else if( id == "infDir" ) {

        document.getElementById( "labelInfDir" ).setAttribute( 'value', value );

    } else {

        document.getElementById( "labelInfEsq" ).setAttribute( 'value', value );
       
    }

}

