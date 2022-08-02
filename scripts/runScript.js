const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

// const filePath = path.join(__dirname, '../assets/Keffie_Token.png');
const filePath = path.join(__dirname, '../assets/cat.png');

pinFileToIPFS(filePath);