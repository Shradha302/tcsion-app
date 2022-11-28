<template>
    <v-app>
    <v-main>
      <v-card flat tile ma-0 pa-0>
        <v-toolbar color="cyan" >
              <img src="@/assets/tcsion-banner.png" height="100" width="150" />
              <v-spacer></v-spacer>
              <div class="items">
                <a id="phone_no"> 1800 029 6030</a> |
                <a id="red_text"> SMS: 'TCSiON' to 16161</a> |
                <a id="phone_no"> Email US </a> |
                <a id="phone_no"> Visit Our Portal </a> |
                <a id="phone_no"> Help Central </a> |
                <a id="phone_no"> Language : </a>

                <select name="English">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Bahasa">Bahasa</option>
                  <option value="Portugese">Portugese</option>
                </select>
              </div>
        </v-toolbar>
      </v-card>
      <div class="header">
        <div class="title">
        <img
          src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-left.png"
          alt="Tata Logo"
        />
        </div>
        <div class="title-img">
        <img
          src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-right.png"
          alt="Tata Logo"
        />
        </div>
      </div>
   <v-spacer></v-spacer>
    <!-- content -->
    <div class="right-content">
        <v-card height="500" color="rgb(125, 125, 254)">
        <v-card-text >
        <v-form id="form" @submit="validateFields" >
          <p id="errorMessages" v-if="errorMessages.length">
            <ul>
              <li v-for="e in errorMessages" v-bind:key="e.id">{{ e }}</li>
            </ul>
          </p>
          <v-card-title>Welcome To SignIn Page</v-card-title>
          <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Username" id="username"  v-model="form.username"  placeholder="Username"
            solo /></v-row>
            <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Email Id" id="email" v-model="form.email"  placeholder="Email Id"
            solo /></v-row>
          
          <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Password" id="password" type="password" v-model="form.password" 
            placeholder="Password"
            solo/></v-row>
          <v-btn class="success mx-0 mt-3" type="submit" >SignIn</v-btn>
        </v-form>
        </v-card-text>
        </v-card>
    </div>
    </v-main>
    <div class="n-footer">
      <div class="footer-content">
        <span class="circle FB"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
      <div class="footer">
        <span> &copy; </span>
        <span id="year1"></span>
        Tata Consultancy Services. All Rights Reserved.
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
    name:'SignIn',
    data() {
      return{
            form:{
                username: null,
                password: null,
                email:null,
                
            },
            errorMessages:[],
            emptyFieldErrorMessage:'No field should be empty',
            usernameErrorMessage:'Username is incorrect',
            emailErrorMessage:'Email is incorrect',
            passwordErrorMessage:'Password is incorrect',   
        }
    },
    methods :{
        validateFields(e){
            this.errorMessages=[];
            e.preventDefault();
            if(!this.form.username || !this.form.email || !this.form.password){
                this.errorMessages.push(this.emptyFieldErrorMessage);
            }
            const userObj = JSON.parse(localStorage.getItem('user'));
            if(this.form.username !== userObj.username){
                //console.log('username error!');
                this.errorMessages.push(this.usernameErrorMessage);
            }
            if(this.form.password !== userObj.password){
                //console.log('password error!');
                this.errorMessages.push(this.passwordErrorMessage);
            }
            if(this.form.email !== userObj.email){
                //console.log('email error');
                this.errorMessages.push(this.emailErrorMessage);
            }
            if(this.errorMessages.length == 0){
                //console.log('successful signin');
                alert('You  have successfully signed in. /n You will be redirected to Dashboard page.');
                //redirect to dashboard page
                this.$router.push('/dashboard');
            }
            e.preventDefault();
        }, 
    }
};
</script>
<style scoped>
  .right-content {
  color: rgb(125, 125, 254);
  display: inline;
  float: right;
  margin-right: 20%;
  margin-left: 60px;
  margin-bottom: 0px;
  padding: 10px 10px 600px 10px;
  border-radius: 10px;
  height: 100px;
  width: 450px;
}
</style>


