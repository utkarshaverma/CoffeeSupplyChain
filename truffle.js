var HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 7545,
	   		network_id: "5777" // Match any network id
		},
    	rinkeby: {
    	    provider: function() {
			  var mnemonic = "crawl expose crime infant note matrix vote egg soap immune total cousin";
			  var url = "https://rinkeby.infura.io/v3/50065b5506284930ab76c1bad0eeb1a1";
			  //put ETH wallet 12 mnemonic code	
		      return new HDWalletProvider(mnemonic, url,0,10);
		    },
		    network_id: '4',
			/*from: '0x8d04DE21d2CAe6164C581850c0C5324Ba84b3857'
			ETH wallet 12 mnemonic code wallet address*/
		}  
    }
};