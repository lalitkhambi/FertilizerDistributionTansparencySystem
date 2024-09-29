# FertilizerDistributionTansparency System

Empowering farmers and ensuring transparency in fertilizer distribution using blockchain.

Table of Contents
Project Overview
Technologies Used
Architecture & Workflow
Smart Contract Overview
Features
Installation and Deployment
Future Enhancements
Contributing
License
Contact
Project Overview
Problem: Farmers face difficulties in obtaining subsidized fertilizers due to a lack of transparency in the distribution process. Some intermediaries sell the fertilizers at higher prices, which leads to the exploitation of the farmers.

Solution: This project utilizes blockchain technology to ensure transparency in the fertilizer distribution system. Every step—from the government releasing fertilizer to retailers, to farmers purchasing it—is tracked and recorded immutably on the blockchain.

Objective: Empower farmers to access real-time information about the availability of fertilizers at subsidized rates, reducing corruption and ensuring equitable distribution.

Technologies Used

An overview of the technologies used in this project.

Solidity: Smart contract development for managing fertilizer distribution.
Remix IDE: Development and testing of smart contracts.
Ethereum Virtual Machine (EVM): The smart contract runs on EVM-compatible blockchains.
MetaMask: (Optional) Interaction with the smart contract for future frontend integration.
Web3.js / Ethers.js: (Optional) JavaScript libraries for frontend interaction with the blockchain.
Architecture & Workflow
System Architecture
The system architecture consists of three main participants: Government, Retailers, and Farmers.

Government: Releases fertilizers to retailers. These transactions are recorded on the blockchain.
Retailers: Confirm receipt of the fertilizers and make the stock available for farmers to purchase.
Farmers: Monitor fertilizer availability and purchase from registered retailers.

Visual representation of how the system works.

Workflow:
Fertilizer Release: The government initiates a transaction releasing fertilizers to registered retailers.
Retailer Confirmation: Retailers confirm the receipt of fertilizer batches.
Farmer Access: Farmers can check the availability of fertilizers in real-time.
Immutable Tracking: All transactions are recorded on the blockchain, ensuring tamper-proof data for all stakeholders.
Smart Contract Overview
The smart contract enables the government to monitor the distribution of fertilizers while allowing farmers to check availability. Key functionalities include:

Fertilizer Release: Government entities add batches of fertilizers to be released to authorized retailers.
Retailer Confirmation: Retailers confirm they have received the fertilizer batch.
Farmer Monitoring: Farmers access the real-time stock data of fertilizers.
Batch Details: Each batch of fertilizers has associated metadata such as quantity, date of release, and retailer information.
solidity
Copy code
// Function to release fertilizers by the government
function releaseFertilizer(address retailer, uint256 amount) public onlyGovernment {
    // Code for releasing fertilizer batch
}

// Function for retailers to confirm receipt of fertilizers
function confirmReceipt(uint256 batchId) public onlyRetailer {
    // Code to confirm fertilizer receipt
}
Features
1. Blockchain-Based Transparency
Every transaction, from the release of fertilizers to the confirmation of receipt, is permanently recorded on the blockchain, ensuring data is tamper-proof and transparent.

2. Real-Time Fertilizer Stock Monitoring
Farmers can track the available stock at various retailers, ensuring they can access fertilizers without fear of inflated prices.

3. Immutable Records
All records are stored immutably, making it impossible to alter transaction details once they are committed to the blockchain.

4. Secure and Efficient
Only authorized entities (the government and retailers) have access to perform specific transactions, ensuring security and proper management of the fertilizer distribution process.

Installation and Deployment
Step 1: Set Up the Environment
Open Remix IDE in your browser.
Create a new file FertilizerTracking.sol and paste the contract code.
Step 2: Compile the Smart Contract
Set the compiler version to ^0.8.0.
Click Compile to ensure there are no syntax errors.
Step 3: Deploy the Contract
Navigate to the Deploy & Run Transactions tab in Remix.
Select Injected Web3 for MetaMask or JavaScript VM for testing.
Deploy the contract by clicking Deploy.
Step 4: Interact with the Contract
Once the contract is deployed, you can interact with its functions:

releaseFertilizer: Simulate the government releasing fertilizer.
confirmReceipt: Retailers confirm the receipt of the fertilizer batch.
viewFertilizerStock: Farmers check the available stock at retailers.
getBatchDetails: Retrieve specific details of a fertilizer batch.
Future Enhancements
Frontend Integration: Build a user-friendly web interface for farmers to interact with the system.
IoT Integration: Integrate IoT devices to track the real-time movement of fertilizer bags.
Multi-Signature Transactions: Implement multi-sig functionality for additional security and approval of transactions.
Mobile Application: Develop a mobile app that allows farmers to easily monitor fertilizer stock and purchase availability on-the-go.
Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, submit a pull request, or open an issue with suggestions.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For questions or suggestions, please reach out to the project maintainer via GitHub.
mail - khambilalit@gmail.com
mob.no. - 9813986896

Sample transactions recorded on the blockchain.
