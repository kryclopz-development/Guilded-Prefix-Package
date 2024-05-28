
# Guilded.js Prefix Bot Starter

This package is a fully built, and working [Guilded](https://www.guilded.gg/?r=mq7bxwL4) Starter Bot for anyone looking to get started developing for the Guilded Community. If you are transferring from [Discord.JS](https://discord.js.org/#/), this will look very familiar.
## Guidance

I have made sure that you are not left confused what is happening. Each and every line of code has an explaination tied to it so you dont get lost.
## Installation

**Clone The Repository With GIT**

```bash
  git clone https://github.com/kryclopz-development/Guilded-Prefix-Package
  cd Guilded-Prefix-Package
```

**Manual Installation**

Click the Green "Code" button on the Top Right of the GitHub Page. Then Click "Download Zip"

Next, Extract the downloaded Zip Folder to wherever you would like your bot to stay.

**Installing Packages**
To Manually install the packages, open Your Command Prompt or Terminal and navigate to the folder that the package.json is located. Then run:
```bash
npm install
```
This will install all the needed packages.

## Configuration

All the Configuration of the Bot is located within the ".env.example" file, place your credentials and preferations in the quotations, then rename the file to just ".env".

**Getting Bot Token**

To get the bots token, open Guilded, go to your servers banner, and click "Manage Bots". Then, go to your Bots settings, go to the API tab, scroll down to "Tokens" and Generate a Token, and Copy, this is the Token to put in your .env file under TOKEN. Remember, *DO NOT* share this token with *ANYONE*.

**Getting MongoDB URL**

To get the MongoDB URL, go to the [MongoDB Website](https://www.mongodb.com/cloud/atlas/register) and register, then follow the Onboarding Process. Stop when you get to the "Deploy Your Database" page. On this page, pick M0, and name your Cluster, then click Create.

Next you want to enter a username and password into the fields you see, remember the password, or copy it, we need it later. Click "Create User".

For easiest access to your Database, you want to add an IP Address entry. For access from anywhere (You Want This) put "0.0.0.0" and hit "Add Entry".

Now hit "Finish and Close" and "Go to Databases". When you can, click "Connect" on the cluster you just made. Pick "Drivers" as the way to connect to your cluster. Keep everything the same, and copy the Connection String which should look like:
```bash
"mongodb+srv://username:<password>@test.ldltumv.mongodb.net/?retryWrites=true&w=majority"
```
Now replace "<password>" with the password you made earlier for the cluster, the one you had to remember. This is now the final string that goes into your .env file under MongoDB_URL

**Picking Your Prefix**

The Prefix of your bot will mainly be up to you. However, you will want to pick something that wont collide with other bots. Most common prefixes are: "/", "-", "!", "~"
## Running The Bot

To Manually start the Bot, open Command Prompt and navigate to the folder that the package.json is located. Then run:
```bash
node .
```
This will start the bot. 
Keep in mind, you must have installed the packages before starting the Bot.