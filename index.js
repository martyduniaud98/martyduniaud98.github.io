const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545')

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "supplier",
                "type": "string"
            }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x46d90983"
    },
    {
        "inputs": [],
        "name": "listProducts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "supplier",
                        "type": "string"
                    }
                ],
                "internalType": "struct StockContract.Product[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x89bb9b00"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
            }
        ],
        "name": "obtainProduct",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "supplier",
                        "type": "string"
                    }
                ],
                "internalType": "struct StockContract.Product",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x68acb744"
    }
];
    
const address = '0x2E0f747AA0377D9E07998dbf6e72d9C913584870';

const contract = new web3.eth.Contract(abi, address);

async function addProduct() {
    const addP = await contract.methods.addProduct().call();
    console.log(addP);
}

async function obtainProduct() {
    const obtainP = await contract.methods.obtainProduct().call();
    console.log(obtainP);
}

async function listProduct() {
    const listP = await contract.methods.listProduct().call();
    console.log(listP);
}