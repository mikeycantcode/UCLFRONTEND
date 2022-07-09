// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        address.length
    )}`;
}

// Display or remove the users know address on the frontend
function showAddress() {
    if (!window.userAddress) {
        document.getElementById("userAddress").innerText = "";
        document.getElementById("logoutButton").classList.add("hidden");
        return false;
    }
    document.getElementById("userAddress").innerText = `ETH Address: ${truncateAddress(window.userAddress)}`;
    document.getElementById("logoutButton").classList.remove("hidden");
}

// remove stored user address and reset frontend
function logout() {
    window.userAddress = null;
    window.localStorage.removeItem("userAddress");
    showAddress();
}

// Login with Web3 via Metamasks window.ethereum library
async function loginWithEth() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    }
    else {
        alert("No ETH brower extension detected.");
    }

    // Load in Localstore key
    window.userAddress = window.localStorage.getItem("userAddress");


    if (window.web3) {
        const selectedAccount = await window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => accounts[0])
        const displayAddy = selectedAccount.substring(0, 6) + ".." + selectedAccount.substring(38);
        document.getElementById("loginButton").innerHTML = displayAddy;
        glob_address = selectedAccount;
        document.getElementById("loginButton").classList.remove("bg-red-500");
        document.getElementById("loginButton").classList.add("bg-orange-500");
    }
    else {
        document.getElementById("loginButton").innerHTML = "No Metamask:(";
    }
}