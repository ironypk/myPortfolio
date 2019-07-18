import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

new Vue ({
    el: '.form__wrapper',
    data:{
        name:'',
        email:'',
        message:'',
        nameValid: true,
        emailValid:true,
        messageValid:true,
        nameError:'',
        emailError:'',
        messageError:'',
        overlayHidden:true,
        resultMessage:''
    },
    methods:{
        validateName(){
            this.name = this.$el.querySelector('.form__input_name').value;
            if(this.name.length < 3){
                this.nameValid = false;
                this.nameError = 'Слишком короткое имя';
            } else{
                this.nameValid =true;
                this.nameError = '';
            }
            return this.nameValid;
        },
        validateEmail(){
            let regex = 
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

            this.email = this.$el.querySelector('.form__input_email').value;

            if(this.email.length<8){
                this.emailValid = false;
                this.emailError = 'Неверный email';
            }else if(!regex.test(this.email)){
                this.emailValid = false;
                this.emailError = 'Неверный email'; 
            } else {
                this.emailValid = true;
                this.emailError = '';
            }
            return this.emailValid;
        },
        validateMessage(){
            this.message = this.$el.querySelector('.form__input_textarea').value;

            if(this.message.length<15){
                this.messageValid = false;
                this.messageError = 'Слишком короткое сообщение'
            } else{
                this.messageValid = true;
                this.messageError = ''
            }

            return this.messageValid;
        },
        submitForm(){
            let nameValid = this.validateName();
            let emailValid = this.validateEmail();
            let messageValid = this.validateMessage();
            if( nameValid && emailValid && messageValid){
                var userData = {
                    username :this.name,
                    email: this.email,
                    message:this.message
                }
                this.axios.get('http://localhost:8080', {
                    headers:{'Cotent-Type': 'application/json'},
                    body:JSON.stringify(userData)
                }).then((response) =>{
                    this.resultMessage = 'Сообщение отправленно!';
                    this.overlayHidden = false;
                });
               
            }

        },
        hideOverlay(){
            this.overlayHidden = true;
        }

    }

})
