import React from 'react'; //React must be in scope for using JSX.

function King()
{
    function abc()
    {
        console.log('refer and earn');
    }
    return(
        <div onClick={abc}>Clobber</div>
    )
}

export default King;