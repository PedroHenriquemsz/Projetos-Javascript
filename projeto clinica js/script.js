function validar(){

   let user = document.querySelector("#username")
   let senha = document.querySelector("#password")

   if(user == "" && senha == "")
   {
        alert("Favor preencher Os Campos Usário e Senha!")
        user.focus()
   }
   if(senha.lengh<8){
    alert("Senha incorreta")
    senha.focus()
   }
}