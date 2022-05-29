require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind assume hunt bean olympic swear'; 
let testAccounts = [
"0x82048bab26c27645dce9ff6999db3f64e4246db6e5f61ee1a94e5b0a2f9a965a",
"0x338b6057368c597ae017a264e3de503d26f184facee9f504f0b38b73b5e2fc04",
"0x7c3318129833675a3853a00e3b0784b70e89470617542077bbd29a7b3e2672a4",
"0x6ec0e50682d2c1e9c889a67674c9892ddc6c797cb9b77c938f83fe3688f48872",
"0xf59dba437195a7cd056fed495effe46fa19b323d4c26dcde20f974f967cea076",
"0x92cda0a1db3eb272e8cc488d9e01c600af5e25ee895c4bf6d45fa86b295037cc",
"0x3d13e99c8e99691ea07cb96c2abfa8e631adf87d5fb9bc20031024af26b1bc18",
"0x26e823dfd11559437e6f9fe053078aceba5ae9618864911e0054d4193be8e701",
"0xf536c934d15a5d6790d513e5c9a48209408bc6aa3d899d2e2c134eaa0acb8030",
"0x99f70679ab2c3d44c9c44505832b58167fce09c700d741477cadf4d7e636ceaa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


