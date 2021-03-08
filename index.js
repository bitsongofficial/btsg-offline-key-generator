const { BitSongClient } = require('@bitsongofficial/js-sdk')

const client = new BitSongClient(
  'https://lcd.testnet4.bitsong.network',
  'bitsong',
  `44'/639'/0'/0/`
);

const generateWallet = async () => {
  const { address, mnemonic } = client.createAccountWithMneomnic()
  console.log('Your address:')
  console.log(address)

  console.log()
  console.log('Your mnemonic:')
  console.log(mnemonic)
}

generateWallet()
