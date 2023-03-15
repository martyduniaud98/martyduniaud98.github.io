// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract StockContract {
    
    struct Product {
        string name;
        uint256 quantity;
        uint256 price;
        uint256 date;
        string supplier;
    }

    //déclaration d'id qui s'auto-incrémentera à chaque nouveau produit ajouté
    uint256 private id;

    // id unique pour chaque produit
    mapping(uint256 => Product) private products;
    
    constructor() {
        id = 0;
    }

    // ajout nouveau produit
    function addProduct(string memory name, uint256 quantity, uint256 price, uint256 date, string memory supplier) public {
        id++;
        Product memory newProduct = Product(name, quantity, price, date, supplier);
        products[id] = newProduct;
    }
    
    // récupère info produit grâce à son id
     function obtainProduct(uint256 productId) public view returns (Product memory) {
        return products[productId];
    }

    // liste tous les produits 
    function listProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](id);
        for (uint256 i = 1; i <= id; i++) {
            allProducts[i-1] = products[i];
        }
        return allProducts;
    }
}