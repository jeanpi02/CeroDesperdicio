const loged = localStorage.getItem('loged')
console.log (loged)

if(!loged || loged == 0){
    alert("No se ha logeado!!!!!")
    window.location.href="/index.html"
}