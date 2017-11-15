pragma solidity ^0.4.4;

contract Rent {
    address contractOwner;
    mapping(string => Agreement) agreements;

    modifier onlyOwner() {
        require(msg.sender == contractOwner);
        _;
    }

    modifier onlyTenant(string contractHash) {
        require(msg.sender == agreements[contractHash].tenant);
        _;
    }

    modifier onlyLandlord(string contractHash) {
        require(msg.sender == agreements[contractHash].landlord);
        _;
    }

    struct Agreement {
        address landlord; // propetario/locador
        address tenant; // inquilino/locatário
        uint monthlyPayment;
        uint suretyValue;
        uint seretyPayed;
        uint finePerBlock;
        uint nextDeadline;
        uint serviceFee;
        uint fund;
        uint agreementDeadline;
    }

    function Rent() {
        contractOwner = msg.sender;
    }

    function createAgreement(string contractHash, address landlord, address tenant, uint monthlyPayment, uint suretyValue, uint finePerBlock, uint serviceFee, uint agreementDeadline) public onlyOwner {
        agreements[contractHash] = Agreement(landlord, tenant, monthlyPayment, suretyValue, 0, finePerBlock, 0, serviceFee, 0, agreementDeadline);
    }

    function paySurety(string contractHash) public onlyTenant(contractHash) payable {
        // require(agreements[contractHash].agreementDeadline > block.number);
        require(agreements[contractHash].suretyValue == msg.value);
        agreements[contractHash].seretyPayed = msg.value;
    }

    function payRent(string contractHash) public onlyTenant(contractHash) payable {
        // require(agreements[contractHash].agreementDeadline > block.number);
        // require(agreements[contractHash].suretyValue == agreements[contractHash].seretyPayed);
        // require(agreements[contractHash].tenant == msg.sender);
        // if (agreements[contractHash].nextDeadline >= block.number) {
        //     require(msg.value == agreements[contractHash].monthlyPayment);
        //     agreements[contractHash].fund += msg.value;
        //     agreements[contractHash].nextDeadline = block.number + 185000;
        // } else {
        //     require(msg.value == (agreements[contractHash].monthlyPayment + (agreements[contractHash].finePerBlock * (block.number - agreements[contractHash].nextDeadline))));
        //     agreements[contractHash].fund += msg.value;
        //     agreements[contractHash].nextDeadline = block.number + 185000;
        // }
        agreements[contractHash].fund += msg.value;
    }

    function receiveFunds(string contractHash) public onlyLandlord(contractHash) {
        require(agreements[contractHash].fund > 0 || (agreements[contractHash].agreementDeadline < block.number && agreements[contractHash].seretyPayed > 0));
        agreements[contractHash].landlord.transfer(agreements[contractHash].seretyPayed + agreements[contractHash].fund);
        agreements[contractHash].fund = 0;
    }

    function checkFunds(string contractHash) constant public returns(uint) {
        return agreements[contractHash].fund;
    }

    function kill() public onlyOwner {
        suicide(contractOwner);
    }

    function() payable { }
}
