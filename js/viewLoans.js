//FILLED WITH LOCALHOST TESTING DATA RN




//check if window.ethereum detected
function bonger() {
    if (!window.ethereum) {
        document.getElementById("alert-1").classList.remove("hidden")
    } else {
        getData()
    }
}
//function that changes the frontend to show the data, called with the main function
async function changeData() { }
//function that on load of the page gets the data from the blockchain async window
async function getData() {
    let factoryContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    let factoryABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_borrower",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_guarantor",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "_interestRate",
                    "type": "uint16"
                },
                {
                    "internalType": "uint256",
                    "name": "_amountBorrowed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_requiredCollateral",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_dueDate",
                    "type": "uint256"
                }
            ],
            "name": "newLoan",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "viewAddressOfBorrower2Loan",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "viewAddressOfGuarantor2Loan",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "viewAddressOfLender2Loan",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    window.web3 = new Web3(window.ethereum);
    const selectedAccount = await window.ethereum
        .request({
            method: "eth_requestAccounts",
        })
        .then((accounts) => accounts[0])
    let factoryContract = new window.web3.eth.Contract(factoryContractAddress, factoryABI)
    const loan1Address = await factoryContract.methods.viewAddressOfBorrower2Loan(selectedAccount).call()
}
//function that removes all of the frills
function removeFrills() {

}