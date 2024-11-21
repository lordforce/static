var pwLength = 10;

new Dragdealer('my-slider' ,{
    x : 0.09,
    steps: 55,
    snap : true,
    animationCallback: function(x, y){
        pwLength = parseInt(5 + x * 55);
        document.getElementById('drag-helper').innerHTML = pwLength + ' signs';
        refreshPW();
    }
});


function refreshPW() {
  var isUppercase = document.getElementById("uppercase").checked;
  var isNumber = document.getElementById("number").checked;
  var isSymbol = document.getElementById("symbol").checked;

  var pwgen = new PWGen();
  pwgen.maxLength = pwLength;
  pwgen.includeCapitalLetter = isUppercase;
  pwgen.includeNumber = isNumber;
  pwgen.includeSpecial = isSymbol;
  document.getElementById('memorablePW').value= pwgen.generate();

  document.getElementById('randomPW').value=getPassword(pwLength, isUppercase, true, isNumber, isSymbol);


}

