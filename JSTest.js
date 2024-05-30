/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// Create a variable to hold your NFTs
let nftCollection = [];

// Function to mint (create) an NFT with metadata
function mintNFT(name, eyeColor, shirtType) {
    // Create an NFT object with metadata
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        
    };
    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Function to print the details of all NFTs
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Shirt Type: " + nftCollection[i].shirtType);
        console.log("-----------");
    }
}

// Minting some example NFTs
mintNFT("Sushant", "Blue", "Hoodie");
mintNFT("Sarvagya", "Brown", "T-Shirt");
mintNFT("Kushal", "Green", "Suit");

// Listing all NFTs
listNFTs();
