require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reflect noble honey include civil army gate'; 
let testAccounts = [
"0xefafbd287ad33887bf5525e1666ea2b5fa9ced301518f06b9e0fb1235fcc24e3",
"0xa2672f75cf7a5140f1a55c7261d6b799673fa20b13b43adecb0011c596dfbe74",
"0xb81812f85a6b78d68f3bf3778bf755d375d6b394813ddd66fe7c122a7084bd12",
"0xb75491d56865487f5cfcef23a79b3d155446812a4b8d45f7bf6488b94bf9d479",
"0x0f2f2869559c9cd167329f871906fa27a44ccbd2d185315ab0f6999d644be3c4",
"0x9ad953a3ec73ba6cad8ea6bf34c07265a182fa2118bdfca42bba60d71fc23540",
"0x5e02ad0f059b3747e5152d85939d478fd0a3019c50f004fb50c3b976fcbb584f",
"0x72213b9315f57cba1eb489530e38fca960e881171eaff307e628e738526396d5",
"0x23c6087470b7846b45ac0a962d790b4a3286f94b485d9c4d1b4d6ed67b5919e6",
"0x08b2f1a302c81aabfb1accd98200c11efae75d0d5f02ab69e823e917f9c393af"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

