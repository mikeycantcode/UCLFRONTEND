//check if window.ethereum detected
async function bonger() {
    if (!window.ethereum) {
        document.getElementById("alert-1").classList.remove("hidden")
    } else {
        // little cool design
        //await ...
    }
}
//function that changes the frontend to show the data, called with the main function

//function that on load of the page gets the data from the blockchain async window
await bonger()