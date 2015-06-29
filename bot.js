// Import the Libs

var toxcore = require('toxcore');
var tox = new toxcore.Tox();

// Bootstrap from nodes

tox.bootstrapSync('192.254.75.102', '33445', "951C88B7E75C867418ACDB5D273821372BB5BD652740BCDF623A4FA293E75D2F"); // Tox Releng
tox.bootstrapSync('104.219.184.206', 443, '8CD087E31C67568103E8C2A28653337E90E6B8EDA0D765D57C6B5172B4F1F04C'); // Jfreegman

tox.setNameSync('KiraYameto');
tox.setStatusMessageSync('ToxBotFTW!');

// Listen for friend requests 
tox.on('friendRequest', function(e) {
  console.log('Friend request from: ' + e.publicKeyHex());
});
    
// Print received friend messages to console 
  tox.on('friendMessage', function(e) {
  var friendName = tox.getFriendNameSync(e.friend());
  console.log(friendName + ': ' + e.message());
});
         
// Print out your tox address so others can add it 
console.log('Address: ' + tox.getAddressHexSync());
          
// Start! 
tox.start();
