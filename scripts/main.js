 function mostrarSenha() {

                                var inputPassword = document.getElementById('senha');

                                var btnShowPassword = document.getElementById('btn-senha');



                                if (inputPassword.type == 'password') {

                                    inputPassword.type = 'text'

                                    btnShowPassword.className = 'showsenha bi bi-eye-slash-fill'



                                } else {

                                    inputPassword.type = 'password'

                                    btnShowPassword.className = 'showsenha bi bi-eye-fill'

                                }

                            }