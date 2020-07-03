pragma solidity ^0.5.0;

contract SimpleStorage {
    string filehash;
    
    function setData(string memory hashfile) public {
        filehash=hashfile;
    }
    
    function getData() public view returns (string memory){
        return filehash;
    } 
}