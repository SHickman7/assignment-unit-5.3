console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//myCollection array initialized as an empty array
let myCollection = [ ];


// addToCollection function pushes record object into the array & returns the object

function addToCollection (collection, title, artist, yearPublished ){
  console.log ('in addToCollection', collection, title, artist, yearPublished);
  let newAlbum = { title, artist, yearPublished }
  collection.push(newAlbum);
  return newAlbum;
}

addToCollection (myCollection, 'Red', 'Taylor Swift', 2012);
console.log ('myCollection with Taylor Swift album: ', myCollection)


//Add 6 albums to the myCollection array. 
  //console.log each album as added using the function's returned value.
  // After all are added, console.log the myCollection array.
 
  console.log( addToCollection (myCollection, 'The White Album', 'The Beatles', 1968));

  console.log( addToCollection (myCollection, 'Fly', 'The Chicks', 1999));

  console.log( addToCollection (myCollection, 'Dookie', 'Green Day', 1994));

  console.log( addToCollection (myCollection, 'Gaslighter', 'The Chicks', 2020));

  console.log( addToCollection (myCollection, 'Speak Now', 'Taylor Swift', 2010));

  console.log( addToCollection (myCollection, 'Let it Bleed', 'The Rolling Stones', 1969));

  console.log ( 'My complete myCollection array:', myCollection);


  //Create a function named showCollection
    //Take in a collection parameter. 
    //Loop through the collection and console.log each album's 
      //information formatted within a single string, like: TITLE by ARTIST, 
      //published in YEARPUBLISHED.


function showCollection (collection){
  //console.log( 'in showCollection');
  for (let i = 0; i < collection.length; i++){
    console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}` );
  }
  //return true;
  }

showCollection(myCollection);


function findByArtist (collection, artist){
  console.log ('in findByArtist');
  let matchingArtists = [ ];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist){
    matchingArtists.push(collection[i])
    }
  } return matchingArtists;

}

console.log( 'Is Taylor Swift in myCollection?', findByArtist (myCollection, 'Taylor Swift'));
console.log( 'Is Ed Sheeran in myCollection?', findByArtist (myCollection, 'Ed Sheeran'));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
