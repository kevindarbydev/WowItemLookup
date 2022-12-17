# World of Warcraft Item Look-Up 
### Uses React.js and Battle.net developer API functions
Enter an item id (4-5 digits) to see it's name and icon
## The access token expires every 48 hours. If it's expired and you'd like to generate a new one follow these steps:
### Open a terminal and paste this command:
```
curl -u c6cfae1d673547759d6fb162a9c7a62a:iVC6Zreg5LScAMfyLcmz3cDhumlUHMvz -d grant_type=client_credentials https://oauth.battle.net/token
```
The two numbers after '-u' are my personal battle.net client ID and secret, which are used to generate the access token.

### You should receive a response like this:
```
{"access_token":"USlWRlM26Es3m7BHKIn47Xf2x42GaWCucu","token_type":"bearer","expires_in":86399,"sub":"c6cfae1d673547759d6fb162a9c7a62a"}
```
### Afterwards, copy the access token and paste it in whereever it asks for a token (line 15 and 29 of Home.js)
### That's all! Have fun :)
