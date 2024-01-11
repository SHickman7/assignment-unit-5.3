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
