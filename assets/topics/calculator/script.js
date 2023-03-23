function insert(num) {
  document.getElementById("res").value += num;
}

function clearDisplay() {
  document.getElementById("res").value = "";
}

function backspace() {
  var result = document.getElementById("res").value;
  document.getElementById("res").value = result.slice(0, -1);
}

function chMode() {
  mode.className == 'fa-solid fa-sun'?
  mode.className = 'fa-solid fa-moon':
  mode.className = 'fa-solid fa-sun';

  let body = document.querySelector('body');
  mode.classList.contains('fa-sun') ?
  body.setAttribute('data-theme', 'dark') :
  body.setAttribute('data-theme', 'light') ;
}

function calculate() {
  var result = document.getElementById("res").value;
  if (result) {
    try {
      result = result.replace(/sin\(/g, "Math.sin(");
      result = result.replace(/cos\(/g, "Math.cos(");
      result = result.replace(/tan\(/g, "Math.tan(");
      result = result.replace(/π/g, Math.PI);
      result = result.replace(/sqrt\(/g, "Math.sqrt(");
      result = result.replace(/log\(/g, "Math.log(");
      result = result.replace(/exp\(/g, "Math.exp(");
      document.getElementById("res").value = eval(result);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Invalid expression!");
      }
    }
  }
}