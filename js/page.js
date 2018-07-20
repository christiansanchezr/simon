var patrones = new Array()
var nivel = 1;

function patron(level) {
  patrones = new Array()
  document.querySelector("#l_level").textContent = `Nivel ${level}`

  for (var i = 0; i < level; i++) {
    patrones[i] = Math.floor(Math.random() * (4 - 1) + 1)
  }

  console.log(patrones)
}

function verificar(color) {
  document.getElementById(color).src = "img/"+color+"_1.png"

  var correcto = false;

  for (var i = 0; i < patrones.length; i++) {
    if (patrones[i] != 0) {
      if (patrones[i] == color) {
        correcto = true
      }else{
        document.getElementById(color).src = "img/"+color+".png"
        return perder()
      }
    }

    if ((i == patrones.length-1) && (correcto = true)){
      alert("partida ganada")
      nivel += 1;
      setTimeout(() => { empezar(nivel) }, 400);
    }

  }



  setTimeout(() => { document.getElementById(color).src = "img/"+color+".png" }, 300);
}

function empezar(nivel) {
  patron(nivel)

  for (var i = 0; i < patrones.length; i++) {
    document.getElementById(patrones[i]).src = "img/"+patrones[i]+"_1.png"
    setTimeout(() => { document.getElementById(patrones[i]).src = "img/"+patrones[i]+".png" }, 500);
  }


}

empezar(nivel)


function perder() {
  var mensaje = confirm("Has perdido. Deseas empezar de nuevo?")


  if (mensaje == true) {
      nivel = 1
      empezar(nivel)
  }
}
