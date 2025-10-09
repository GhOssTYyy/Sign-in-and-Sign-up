function mostrarsenha2() {

    let inputPass = document.getElementById('senha2')

    let btn = document.getElementById('btn-senha2')



    if(inputPass.type === 'password') {

        inputPass.setAttribute('type', 'text')



        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')

    }


    else {

        inputPass.setAttribute('type', 'password')



        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')

    }

}