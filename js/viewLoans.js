//FILLED WITH LOCALHOST TESTING DATA RN




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
    let address = await signer.getAccount()
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


//check if window.ethereum detected
function bonger() {
    if (!window.ethereum) {
        document.getElementById("alert-1").classList.remove("hidden")
    } else {
        if (localStorage.getItem("userAddress")) {
            document.getElementById("loginButton").innerHTML = truncateAddress(localStorage.getItem("userAddress"))
            getData()
        }
    }
}

//function that on load of the page gets the data from the blockchain async window
async function getData() {
    let loanData
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

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const factoryContract = new ethers.Contract(factoryAddress, factoryABI, provider)


    const addressOfLoan = await factoryContract.viewAddressOfLender2Loan("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    let check = isNullAddress(addressOfLoan, "borrowerLoans")
    if (check) {
        const currLoanContract = new ethers.Contract(addressOfLoan, ucLoanABI, provider)
        loanData = await loanFound(addressOfLoan, currLoanContract, 1)
    }


    const addressOfLoan2 = await factoryContract.viewAddressOfBorrower2Loan("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    check = isNullAddress(addressOfLoan2, "lenderLoans")
    if (check) {
        const currLoanContract = new ethers.Contract(addressOfLoan, ucLoanABI, provider)
        loanData = await loanFound(addressOfLoan2, currLoanContract, 2)
    }




}

//function to change the display if no loans found
function noLoansFound(id) {
    document.getElementById(id).innerHTML = "No Loans found. Start a new loan in the [Start a Loan] tab."
}

//function to test for null
function isNullAddress(address, id) {
    if (address == 0x0000000000000000000000000000000000000000) {
        noLoansFound(id)
        return false
    } else {
        return true
    }
}

//function to change the data
async function loanFound(address, contract, number) {
    const loanAddress = address
    console.log(loanAddress)
    document.getElementById("loanAddress" + number).innerHTML = "Address of Loan : " + loanAddress
    const lenderAddress = await contract.viewLender()
    console.log(lenderAddress)
    document.getElementById("lenderAddress" + number).innerHTML = "Address of Lender : " + lenderAddress
    const borrowerAddress = await contract.viewBorrower()
    console.log(borrowerAddress)
    document.getElementById("borrowerAddress" + number).innerHTML = "Address of Borrower : " + borrowerAddress
    const amountBorrowed = BigInt(await contract.amountBorrowed()).toString()
    console.log(amountBorrowed)
    document.getElementById("amountBorrowed" + number).innerHTML = "Amount Borrowed : " + amountBorrowed + " wei"
    const amountToPay = BigInt(await contract.viewDebt()).toString()
    console.log(amountToPay)
    document.getElementById("amountTotalPay" + number).innerHTML = "Amount Left To Pay : " + amountToPay + " wei"
    const timeLeft = await contract.viewTime()
    console.log(timeLeft)
}


