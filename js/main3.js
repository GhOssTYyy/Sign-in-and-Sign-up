function mostrarsenha3() {

    let inputPass = document.getElementById('senha3')

    let btn = document.getElementById('btn-senha3')



    if(inputPass.type === 'password') {

        inputPass.setAttribute('type', 'text')



        btn.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')

    }


    else {

        inputPass.setAttribute('type', 'password')



        btn.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')

    }

}