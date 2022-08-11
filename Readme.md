<br/>

# GRIFFIN

> **`GRIFFIN`** is Private crypto payroll all-in-one solution for web3 organizations. It is also **`the first DAPP project`** based on Polygon Nightfall.

<h1 align="center"> 
<img src="https://i.ibb.co/QcSzxtr/Thumb-6.png" alt="Thumb-6" border="0">
    <div align="center">

[![GitHub Open Issues](https://img.shields.io/github/issues-raw/rkdud007/griffin.app?color=green)](https://github.com/skkugoon/GriffinBackend/issues)
[![GitHub Closed Issues](https://img.shields.io/github/issues-closed-raw/rkdud007/griffin.app?color=red)](https://github.com/skkugoon/GriffinBackend/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub Open PR](https://img.shields.io/github/issues-pr-raw/rkdud007/griffin.app?color=green)](https://github.com/skkugoon/GriffinBackend/pulls)
[![GitHub Closed PR](https://img.shields.io/github/issues-pr-closed-raw/rkdud007/griffin.app?color=red)](https://github.com/skkugoon/GriffinBackend/pulls?q=is%3Apr+is%3Aclosed)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>
  
  <div align="center">

[![golang](https://img.shields.io/badge/golang-v1.18-blue?logo=golang)](https://developer.apple.com/kr/swift/)
[![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript)](https://github.com/airbnb/javascript)
[![next.js](https://img.shields.io/badge/next.js-v12.0.8-white?logo=next.js)](https://www.typescriptlang.org/)

  </div>
  
  
</h1>
    📆 2022.07.31 ~ Ongoing

#### 📩 [Deployed Webapp](https://griffin-app.vercel.app/)

#### 📩 [Landing Page](https://griffinpay.xyz/)

- 🔗 [FrontEnd Github](hhttps://github.com/rkdud007/griffin.app)
- 🐳 [BackEnd Github](https://github.com/SKKUGoon/GriffinBackend)
- 🐳 [Nightfall Github](https://github.com/EYBlockchain/nightfall_3)

<br>
<br>

## Problem we solve

Many people in the Web3 scene are already paid with crypto, and statistics show that the amount of crypto paid as wages is expected to increase. In this context, solutions that make crypto payroll easier are also emerging recently.

However, the biggest problem with all of these services is that all transactions are inevitably transparent due to the characteristics of the existing blockchains, and all the salary amount, timing, and recipient's wallet address are disclosed.

In fact, most companies are reluctant to disclose the amount of wages employees receive due to their advantage in salary negotiations and relationship issues between employees.

So existing crypto payroll services do not meet the company's needs regarding this privacy issue, and this is one of the biggest reasons why crypto wage payments are not becoming popular.

<br>

## ✏️ Main Feature

### ✅ Griffin Payroll Dashboard

<a href="https://ibb.co/mCt4Gp1"><img  src="https://i.ibb.co/1fKTLch/main.png" alt="2022-01-28-2-09-58" border="0"></a>

Griffin Payroll Dashboard provides Web3 Organizations with the most essential and cleanest UX while processing All Payroll transactions privately on Griffin Payroll Dashboard.

On The Griffin Payroll Dashboard, you can open the Private Crypto Payroll Payment Approval window with one click and view the wallet balance along with simply visualized statistics like estimated Payroll payment total and payment details.

### ✅ Employees Management

<a href="https://ibb.co/jDFj4SP"><img  src="https://i.ibb.co/HqQ9gjf/list.png" alt="2022-01-28-2-11-36" border="0"></a>

Register employees to GRIFFIN simply by entering their information. Only by registering Employees, you can process repeated multiple monthly payrolls at once easily with a few clicks, and can see at a glance how much they're getting paid.

### ✅ Send payroll in preferred currency, get paid in crypto

<a href="https://ibb.co/Qk995ZT"><img src="https://i.ibb.co/gdyynGf/pay.png" alt="2022-01-28-2-12-22" border="0"></a>

Griffin Payroll supports multiple payment options including various cryptocurrencies and even with NFTs. It provides payment options in the currency preferred by the recipient. ex) ETH, USDC (ERC-20), USD (Fiat), NFTs (ERC-721) etc

<br>

## 🔥 Challenges

First of all, Polygon Nightfall is a very new chain. Since the SDK is not completely created at the moment, in order to create a DAPP, we should actually need to run the Proposal and Client from Nightfall directly on our local computer. There were no documents or tutorials for development, so we solved all the errors and debugging by asking the Polygon Nightfall team directly via Telegram.

The installation of Nightfall on the local computer took almost two days to resolve the error. In the process, we learned that the nightfall works on the docker, and that the docker specification needs to be maximized to run the nightfall. In addition, in the process of connecting Griffin Web Front and Nightfall, we tried various things such as putting it directly into the node module with npm link, and found that the Nightfall SDK was not optimized for browsers, so we had to apply the Web3 Provider to the SDK.

<br>

## Members 👯‍♀️

|                          💻 FRONT                          |                                    💻 FRONT                                    |                            ⚙️ BACK                             |                               ⚙️ NIGHTFALL                               |                                           👨‍🎨 DESIGN                                            |
| :--------------------------------------------------------: | :----------------------------------------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| ![hello](https://i.ibb.co/XbJwr4c/2022-08-11-10-56-11.png) | ![KakaoTalk_Video_2022-01-27-21-40-41_1](https://i.ibb.co/DVGqPgh/1883877.png) | ![ezgif com-gif-maker](https://i.ibb.co/QQZtz25/dumbcat-1.png) | ![ezgif com-gif-maker](https://i.ibb.co/tqWFcZ0/2022-08-11-11-42-44.png) | ![KakaoTalk_Video_2022-01-27-21-40-34](https://i.ibb.co/2MFTxVv/photo-2022-08-11-10-45-42.jpg) |
|           [Pia 🍊](https://github.com/rkdud007)            |                  [Vincent 🐿](https://github.com/vincentlaucy)                  |            [Sangil 🐱](https://github.com/SKKUGoon)            |                  [Julia 🐨](https://github.com/jbae49)                   |                                           JB Won 🐨                                            |

<br>

## Installation

```bash
$ cd griffin_front
$ yarn
$ yarn dev
```
