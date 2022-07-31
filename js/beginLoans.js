let provider


function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        address.length
    )}`;
}

async function loginWithEth() {
    if (!window.ethereum) {
        document.getElementById("loginButton").innerHTML = "No Metamask Detected";
        alert("At this time I only support metamask (or any other window.ethereum based wallets)");
        return false
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    let address = await signer.getAddress()
    localStorage.setItem("userAddress", address)
    document.getElementById("loginButton").innerHTML = truncateAddress(address);


    document.getElementById("loginButton").classList.remove("bg-red-500");
    document.getElementById("loginButton").classList.add("bg-orange-500");
}

let ucLoanABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_lender",
                "type": "address"
            },
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
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "acceptLoanAndPayCollateral",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "actualCollateral",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "amountBorrowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "amountLeft2Pay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "amountToBeRepaid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "borrowerPayOffLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cancelLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "denyLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dueDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endLoan1",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endLoan2",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endLoan3",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "guarantorPayOffLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isLoanActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "kA",
        "outputs": [
            {
                "internalType": "bytes1",
                "name": "",
                "type": "bytes1"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "kAborrowerPayOffLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "requiredCollateralAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewAmountFundedByAddress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewBadDebt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewBorrower",
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
        "inputs": [],
        "name": "viewCollateral",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewDebt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "viewGuarantor",
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
        "inputs": [],
        "name": "viewLender",
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
        "inputs": [],
        "name": "viewTime",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawBorrowed",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawLender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

let factoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
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

async function createLoan() {
    //0x0000000000000000000000000000000000000000
    const deactivateGuarantor = "0x2546BcD3c84621e976D8185a91A922aE77ECEc30"
    var borrower = document.getElementById("borrower").value.toString()
    console.log(borrower)
    var amountToLend = ethers.utils.parseUnits(document.getElementById("amountToLend").value, 18).toString()
    console.log(amountToLend)
    var intRate = document.getElementById("intRate").value.toString()
    console.log(intRate)
    var reqCollateral = ethers.utils.parseUnits(document.getElementById("reqCollateral").value, 18).toString()
    console.log(reqCollateral)
    var dueDate = document.getElementById("dueDate").value.toString()
    console.log(dueDate)
    const options = { value: ethers.utils.parseEther("4.0") }
    ethereum.request({ method: 'eth_requestAccounts' })
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const factoryContract = new ethers.Contract(factoryAddress, factoryABI, provider)
    const connectedFactory = factoryContract.connect(signer);
    const createLoan = await connectedFactory.newLoan(
        borrower,
        deactivateGuarantor,
        intRate,
        amountToLend.toString(),
        reqCollateral,
        dueDate,
        options
    )
    console.log(createLoan)
    const tx = await createLoan.wait()
    console.log(tx)

}
