function writeCards( namesarray, event ) {
    let thankcards = []
    for ( let i = 0; i < namesarray.length; i++ ) {
      thankcards.push( `Thank you, ${namesarray[i]}, for the wonderful ${event} gift!` )
    }
    return thankcards
  }
  
  function countDown( num ) {
    while ( num > 0 ) {
      console.log( num );
      num -= 1;
    }
    console.log( num );
  }
