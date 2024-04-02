function init() {
//add your javascrip between these two lines of code
    function showMeText() {
      var textbox = document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML = textbox.value;
      alert("Jared Benman: " + textbox.value);
    }
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', showMeText)
}
window.addEventListener('load', init);
