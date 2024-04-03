function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function output() {
    var box = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = box.value;
    alert("Jared Benman: " + box.value);
  }
  button.addEventListener('click', output);
}
window.addEventListener('load', init);
