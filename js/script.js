function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', output);

  function output() {
    var box = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = box.value;
    alert("Jared Benman: " + box.value);
  }
}
window.addEventListener('load', init);
