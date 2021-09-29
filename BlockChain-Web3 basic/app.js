const Web3 = require("web3"); //include library
var web3 = new Web3("https://speedy-nodes-nyc.moralis.io/4ebc5d8c788566c7866161de/eth/mainnet"); //


//1.count block data
const BlockNumber = async () => {
    var blockNumber = await web3.eth.getBlockNumber();
    //console.log(`BlockNumber :${blockNumber}`);
    return blockNumber;
};

//2.view data getBlock detail
const BlockDetail = async (blockNumber) =>{
    var blockDetail = await web3.eth.getBlock(blockNumber);
    //console.log(blockDetail);
    return blockDetail;
}
 //3. detail_transaction
const getdetailTransaction = async (transactionHash)=>{
  const detailTransaction_hash=await web3.eth.getTransaction(transactionHash);
    return  detailTransaction_hash;

}

const main = async()=> {
      console.log("Function main is running.................");

      const blocknumber= await BlockNumber();
     // console.log(blocknumber);

      
      const blockdetail=await BlockDetail(blocknumber);
      //console.log(blockdetail);
  

      if (!blockdetail.transactions.length){ 
          console.log(`not transaction in block :${blockNumber}`);
        } else if(blockdetail.transactions.length){
            console.log(`Block Transactions length======  ${blockdetail.transactions.length}  Block`);  //นับจำนวนธุรกรรม
            console.log(`Block -> Number::::  ${blockdetail.number}`);
            console.log(`block -> Hash::::::  ${blockdetail.hash}`);
            console.log(`Block -> Size::::::   ${blockdetail.size}`);
        }
/*
        for(let i=0;i<10;i++){
            console.log(`Transection Number:: ${i+1} is :: ${blockdetail.transactions[i]}`);
        }
    */    
        for(var i=0;i<blockdetail.transactions.length;i++){
            console.log(`Transection Number:: ${i+1} is :: ${blockdetail.transactions[i]}`);

                var detail_transaction= await getdetailTransaction(blockdetail.transactions[i]);
                console.log(detail_transaction);
        }
 
}
main();