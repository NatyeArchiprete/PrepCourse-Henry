function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }
  function otrafuncion() {
    return (
      "El nombre retornado por la funcion "cuidadoConElConsoleLog" es: " + 
      cuidadoConElConsoleLog("Camilo")
    );
  }