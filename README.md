## Getting Testnet Tokens

For the testnet you are not allowed to generate or mine new blocks to get tokens. Rather, you can request some free tokens from the testnet faucet:

https://wallet.htmlcoin.com/faucet

First generate a new payment address:

```wallet.htmlcoin.com
```- Click Settings and Select Testnet
```- Generate testnet wallet


Then copy it into the input box:

![](https://raw.githubusercontent.com/qtumproject/qtumbook/38b045436f87e28ad80fc041549c0ee4a77dda38/en/part1/networks/faucet.jpg)

https://wallet.htmlcoin.com/htmlcoin-testnet-faucet

Once accepted, you should see your address and amount in the list of latest payouts:

![](https://raw.githubusercontent.com/qtumproject/qtumbook/38b045436f87e28ad80fc041549c0ee4a77dda38/en/part1/networks/faucet-paid.jpg)

Clicking on the pay out address, you'd see a link to view the transaction in the testnet block explorer:

![](https://raw.githubusercontent.com/qtumproject/qtumbook/38b045436f87e28ad80fc041549c0ee4a77dda38/en/part1/networks/faucet-pay-tx.jpg)

[https://testnet-api.htmlcoin.com/address/hcf3Yv72SbLvVDmU99BMf5T1YwvdvA3fx6](https://testnet-api.htmlcoin.com/address/hcf3Yv72SbLvVDmU99BMf5T1YwvdvA3fx6)

Once it's confirmed, you can check your balance locally:

```
qcli getbalance

94.00000000
```

You can also see the UTXOs created for that amount:

```
qcli listunspent

[
  {
    "txid": "2a8997d398633bc01c97fc623a59aaca4f678caf2d3949f4679e1f0f5952479f",
    "vout": 0,
    "address": "hcf3Yv72SbLvVDmU99BMf5T1YwvdvA3fx6",
    "account": "",
    "scriptPubKey": "76a914d17c851679a8ca558d9d783643cc926f7a382e7888ac",
    "amount": 94.00000000,
    "confirmations": 23,
    "spendable": true,
    "solvable": true
  }
]
```
