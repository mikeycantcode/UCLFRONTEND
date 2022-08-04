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

function onStart() {
    if (localStorage.getItem("userAddress")) {
        document.getElementById("loginButton").innerHTML = truncateAddress(localStorage.getItem("userAddress"))
        getData()
    }
}