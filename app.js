const contractAddress = "0x588801f37b222d1a44f3749272080c5f27926466";
const contractABI = [ 
    {
        "inputs": [
            { "internalType": "uint256", "name": "_bags", "type": "uint256" }
        ],
        "name": "claimFertilizer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "address", "name": "retailer", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "bags", "type": "uint256" }
        ],
        "name": "FertilizerClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "address", "name": "retailer", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "bags", "type": "uint256" }
        ],
        "name": "FertilizerReleased",
        "type": "event"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_retailer", "type": "address" },
            { "internalType": "string", "name": "_name", "type": "string" }
        ],
        "name": "registerRetailer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_retailer", "type": "address" },
            { "internalType": "uint256", "name": "_bags", "type": "uint256" }
        ],
        "name": "releaseFertilizer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "government",
        "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "name": "isRetailer",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "name": "retailers",
        "outputs": [
            { "internalType": "string", "name": "name", "type": "string" },
            { "internalType": "uint256", "name": "bagsAllocated", "type": "uint256" },
            { "internalType": "uint256", "name": "bagsClaimed", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "_retailer", "type": "address" }],
        "name": "viewDistribution",
        "outputs": [
            { "internalType": "string", "name": "", "type": "string" },
            { "internalType": "uint256", "name": "", "type": "uint256" },
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let web3;
let contract;

window.addEventListener('load', async () => {
    // Check if Web3 is injected by the browser (MetaMask)
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            console.log("Connected accounts:", accounts);
            
            // Initialize contract
            contract = new web3.eth.Contract(contractABI, contractAddress);
            console.log("Contract initialized:", contract);
        } catch (error) {
            console.error("User denied account access:", error);
        }
    } else {
        alert('Please install MetaMask!');
    }

    // Register Retailer
    document.getElementById('registerForm').onsubmit = async (event) => {
        event.preventDefault();
        const retailerAddress = document.getElementById('retailerAddress').value;
        const retailerName = document.getElementById('retailerName').value;
        const accounts = await web3.eth.getAccounts();

        try {
            await contract.methods.registerRetailer(retailerAddress, retailerName).send({ from: accounts[0] });
            alert('Retailer registered!');
        } catch (error) {
            console.error("Error registering retailer:", error.message);
            alert('Error registering retailer: ' + error.message);
        }
    };

    // Release Fertilizer
    document.getElementById('releaseForm').onsubmit = async (event) => {
        event.preventDefault();
        const releaseAddress = document.getElementById('releaseAddress').value;
        const bagsToRelease = document.getElementById('bagsToRelease').value;
        const accounts = await web3.eth.getAccounts();

        try {
            await contract.methods.releaseFertilizer(releaseAddress, bagsToRelease).send({ from: accounts[0] });
            alert('Fertilizer released!');
        } catch (error) {
            console.error("Error releasing fertilizer:", error.message);
            alert('Error releasing fertilizer: ' + error.message);
        }
    };

    // Claim Fertilizer
    document.getElementById('claimForm').onsubmit = async (event) => {
        event.preventDefault();
        const bagsToClaim = document.getElementById('bagsToClaim').value;
        const accounts = await web3.eth.getAccounts();

        try {
            await contract.methods.claimFertilizer(bagsToClaim).send({ from: accounts[0] });
            alert('Fertilizer claimed!');
        } catch (error) {
            console.error("Error claiming fertilizer:", error.message);
            alert('Error claiming fertilizer: ' + error.message);
        }
    };

    // View Distribution
    document.getElementById('viewForm').onsubmit = async (event) => {
        event.preventDefault();
        const viewAddress = document.getElementById('viewAddress').value;

        try {
            const result = await contract.methods.viewDistribution(viewAddress).call();
            document.getElementById('distributionResult').innerHTML = 
                `<strong>Name:</strong> ${result[0]}<br>
                <strong>Bags Allocated:</strong> ${result[1]}<br>
                <strong>Bags Claimed:</strong> ${result[2]}`;
        } catch (error) {
            console.error("Error viewing distribution:", error.message);
            alert('Error viewing distribution: ' + error.message);
        }
    };
});
