let button = document.getElementById("btn_cor");
let fundo = document.getElementById("color");
let btn_img = document.getElementById("btn_img");
let btn_text = document.getElementById("btn_text");

//variavel de controle para que a function saiba se foi aplicado ou não poderia ser o uso de 
//contains mas uma variavel de controle fica mas facil de entender.
let tadark = false;


//function reponsavel por toda a troca de cor do Dom
button.addEventListener("click", function () {
    if(tadark == false){
        //adicionando classes do css nop dom
        fundo.classList.add("dark");
        button.classList.remove("btn_light");
        button.classList.add("btn_dark");
        btn_text.textContent = "Light";
        //passando pra variavel de controle que está no tema dark
        tadark = true;
        //trocando os atributos da img ex title
        btn_img.setAttribute("src", `img/sun.png`);
        btn_img.setAttribute("title", "trocar para o tema claro");
    }else{
        //passando para variavel que o tema escuro saiu
        tadark = false;
        //adicionando classes do css nop dom
        fundo.classList.remove("dark");
        button.classList.remove("btn_dark");
        button.classList.add("btn_light");
        btn_text.textContent = "Dark";
        //setando os atributos da img
        btn_img.setAttribute("src", `img/moon.png`);
        btn_img.setAttribute("title", "trocar para o tema escuro");

    }
})