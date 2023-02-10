# World of Warcraft Item Look-Up 
### Uses React.js and Battle.net developer API functions
Enter an item id (4-5 digits) to see it's name and icon

dotenv is giving me issues so all developer credentials are exposed for now,
will fix when im less busy

## To run locally, you will need to generate an access token
### To do so, open a terminal and paste this command:
```
curl -u c6cfae1d673547759d6fb162a9c7a62a:iVC6Zreg5LScAMfyLcmz3cDhumlUHMvz -d grant_type=client_credentials https://oauth.battle.net/token
```
The two numbers after '-u' are my personal battle.net client ID and secret, which are used to generate the access token. I acknowledge
that under normal circumstances having a client ID and secret exposed is a serious security concern, but it is for a throwaway battle.net account of mine,
and this project was strictly for the purpose of learning.

### You should receive a response like this:
```
{"access_token":"USlWRlM26Es3m7BH00007Xf2x42GaWCucu","token_type":"bearer","expires_in":86399,"sub":"c6cfae1d673547759d6fb162a9c7a62a"}
```
#### Afterwards, copy the access token and replace {process.env.API_KEY} with your new access token (line 15 and 29 of Home.js)
### That's all! Have fun :)
