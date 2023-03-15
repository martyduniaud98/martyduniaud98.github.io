# Projet_fil_rouge

*Lien trello : https://trello.com/b/FEUWW3Kn/supply*

### Etape 01 : Smart Contract

#### 1. Introduction
Créer un smart contract Ethereum: Nous allons créer un smart contract Ethereum qui contiendra toutes les informations pertinentes sur notre stock d'approvisionnement, telles que les quantités, les prix et les dates d'achat. Nous allons utiliser le langage de programmation Solidity pour créer notre contrat.

#### 2. Détails
Pour créer un smart contract Ethereum, nous avons fait le choix d'utiliser le langage de programmation Solidity. Nous allons aussi utiliser l'extension Remix de VScode pour compiler et déployer pour écrire notre contrat.

Voici les étapes générales pour créer un smart contract Ethereum :
- Déterminer les fonctions que nous souhaitons inclure dans notre contrat.
- Écrire le code Solidity pour chaque fonction.
- Compiler le contrat pour vérifier qu'il n'y a pas d'erreurs.
- Déployer le contrat sur la blockchain Ethereum en utilisant un portefeuille compatible avec Ethereum comme MetaMask ou MyEtherWallet.
- Une fois que nous avons déployé notre contrat, nous pouvons interagir avec lui en appelant ses fonctions depuis une interface utilisateur ou un autre contrat.

### Etape 02 : Définir les autorisations 

#### 1. Introduction
Nous allons  définir des autorisations pour notre smart contract, de sorte que seules certaines parties puissent y accéder. Par exemple, nous allons permettre à nos fournisseurs d'ajouter des informations sur les produits qu'ils ont fournis, tandis que les acheteurs pourront simplement afficher les informations stockées dans le contrat mais n'auront pas la possibilité de modifier cette partie.

#### 2. Détails
Pour définir les autorisations dans notre smart contract, noux allons utiliser des modificateurs Solidity. Les modificateurs nous permettent de restreindre l'accès à certaines fonctions à des utilisateurs spécifiques.

Par exemple, nous allons créer un modificateur qui vérifie si l'utilisateur qui appelle la fonction est un fournisseur enregistré. Si l'utilisateur n'est pas un fournisseur, la fonction ne sera pas exécutée.

Voici un exemple de modificateur qui vérifie si l'utilisateur est un fournisseur :
```cs
modifier onlySupplier {
  require(suppliers[msg.sender]);
  _;
}
```

Dans cet exemple, suppliers est une carte qui associe une adresse Ethereum à un booléen. Si la valeur associée à l'adresse de l'utilisateur est true, cela signifie que l'utilisateur est un fournisseur enregistré.

Nous pourrons ensuite appliquer ce modificateur à des fonctions spécifiques de notre contrat :
```csharp
function addProduct(string memory _name, uint _price, uint _quantity) public onlySupplier {
}
```
Dans cet exemple, seuls les fournisseurs enregistrés peuvent ajouter des produits.

### Etape 03 : Interface utilisateur

#### 1. Introduction
Pour rendre notre application conviviale, nous allons créer une interface utilisateur qui permettra à nos utilisateurs d'interagir avec le smart contract. Nous   utiliserons des outils tels que Web3.js et Vuejs pour créer une interface utilisateur interactive.

#### 2. Détails
Pour créer une interface utilisateur pour notre application blockchain, nous allons utiliser les bibliothèques Web3.js et Vuejs. 
Web3.js est une bibliothèque JavaScript qui permet à notre interface utilisateur d'interagir avec le smart contract Ethereum, tandis que Vuejs est un framework JavaScript pour créer des interfaces utilisateur.

Voici les étapes générales pour créer une interface utilisateur :

1. Déterminer les fonctionnalités que nous voulons inclure dans notre interface utilisateur.
2. Écrire le code JavaScript pour chaque fonctionnalité en utilisant Web3.js.
3. Créer une interface utilisateur en utilisant Vuejs ou une autre bibliothèque JavaScript pour afficher les données et permettre à l'utilisateur d'interagir avec le smart contract Ethereum.

Voici un exemple de code Web3.js pour appeler une fonction addProduct dans notre contrat Ethereum :
```javascript
const productContract = new web3.eth.Contract(abi, contractAddress);

const addProduct = async (name, price, quantity) => {
  await productContract.methods.addProduct(name, price, quantity).send({ from: account });
};
```
Dans cet exemple, abi est l'interface du contrat Ethereum, contractAddress est l'adresse du contrat sur la blockchain Ethereum.

### Etape 04 : Stocker les informations sur la blockchain

#### 1. Introduction 
Une fois que nous avons créé notre smart contract et notre interface utilisateur, nous pouvons commencer à stocker les informations sur la blockchain Ethereum. Toutes les informations que nous allons stocker sur la blockchain seront immuables et ne pourront pas être modifiées ou supprimées.

#### 2. Détails
Pour stocker les informations sur la blockchain Ethereum, nous allons appeler les fonctions de notre smart contract depuis l'interface utilisateur ou un autre contrat. Lorsque nous allons appeler une fonction, nous devrons payer des frais de transaction en gas, qui est la mesure de l'utilisation des ressources de la blockchain Ethereum.

Voici un exemple de fonction qui stocke des informations sur la blockchain Ethereum :
```
function addProduct(string memory _name, uint _price, uint _quantity) public onlySupplier {
  products.push(Product(_name, _price, _quantity));
}
```
Dans cet exemple, addProduct ajoute un produit à un tableau products dans le smart contract Ethereum. Le tableau products contient des structures Product, qui contiennent les informations sur chaque produit.

Lorsque nous allons appeler cette fonction depuis notre interface utilisateur, nous allons devoir inclure le montant de gas que nous sommes prêt à payer pour cette transaction. Plus le montant de gas est élevé, plus notre transaction sera traitée rapidement.


### Etape 05 : Utiliser des tokens Ethereum

#### 1. Introduction 
Utiliser des tokens Ethereum: Nous allons également utiliser des tokens Ethereum pour suivre la possession de notre stock d'approvisionnement. Chaque fois que nous achetons ou vendons des produits, nous pourrons transférer des tokens Ethereum en échange.

#### 2. Détails
Pour utiliser des tokens Ethereum pour suivre la possession de notre stock d'approvisionnement, nous allons créer notre propre token ERC-20. ERC-20 est un standard pour les tokens Ethereum qui définit les fonctions et les événements que tout token ERC-20 doit implémenter.

Voici comment créer un token ERC-20 pour notre application :

1. Définir les propriétés du token : Nous allons définir des propriétés telles que le nom, le symbole, le nombre total de tokens en circulation et le nombre de décimales du token.
```php
contract SupplyToken is ERC20 {
    string public name = "SupplyToken";
    string public symbol = "ST";
    uint8 public decimals = 18;
    uint public totalSupply = 1000000000 * 10**uint(decimals); // 1 billion tokens
    constructor() {
        _mint(msg.sender, totalSupply);
    }
}
```
Dans cet exemple, nous avons créé un token appelé "SupplyToken" avec le symbole "ST", avec un total de 1 milliard de tokens en circulation, chacun avec 18 décimales.

2. Ajoutr des fonctions de transfert : Nous allons ajouter des fonctions pour transférer des tokens entre les adresses Ethereum. Nous utiliserons les fonctions standard transfer et transferFrom définies dans l'interface ERC-20.
```php
function transfer(address to, uint256 value) public override returns (bool) {
    require(to != address(0), "ERC20: transfer to the zero address");
    require(value <= balanceOf(msg.sender), "ERC20: transfer amount exceeds balance");
    _transfer(msg.sender, to, value);
    return true;
}

function transferFrom(address from, address to, uint256 value) public override returns (bool) {
    require(from != address(0), "ERC20: transfer from the zero address");
    require(to != address(0), "ERC20: transfer to the zero address");
    require(value <= balanceOf(from), "ERC20: transfer amount exceeds balance");
    require(value <= allowance(from, msg.sender), "ERC20: transfer amount exceeds allowance");
    _transfer(from, to, value);
    _approve(from, msg.sender, allowance(from, msg.sender) - value);
    return true;
}
```
4. Déployer le contrat du token sur la blockchain Ethereum : Une fois que nous avons écrit le code pour notre token ERC-20, nous pourrons le déployer sur la blockchain Ethereum en utilisant un portefeuille compatible avec Ethereum comme MetaMask ou MyEtherWallet. Nous utilserons Remix (IDE web) pour déployer notre contrat.
5. Utiliser le token dans notre contrat d'approvisionnement : Maintenant que nous avons déployé notre token ERC-20, nous pourrons l'utiliser dans notre contrat d'approvisionnement pour suivre la possession de notre stock. Chaque fois que nous allons acheter ou vendre des produits, nous pourrons transférer des tokens Ethereum en échange. Nous allons utiliser la fonction transfer définie dans notre contrat ERC-20 pour transférer des tokens entre les adresses Ethereum.
```cs
function buyProduct(uint256 productId) public payable {
    Product storage product = products[productId];
    require(product.quantity > 0, "Product is sold out");
    require(msg.value >= product.price, "Insufficient funds");
    uint256 amountToTransfer = product.price * 10
```