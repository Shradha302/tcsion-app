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
  display: block;
  float: right;
  margin-right: 30%;
  margin-left: 60px;
  margin-bottom: 0px;
  padding: 10px 10px 600px 10px;
  border-radius: 100px;
  height: 100px;
  width: 450px;
}
.n-footer {
  background: #043254 none repeat scroll 0 0;
  /* top:90%; */
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-top:10px;
}
#year1 {
  font-size: 1em;
  vertical-align: 0px;
}
.footer-content {
  display: inline-block;
  float: right;
  margin-right: 3%;
  margin-left: 2px;
}
.circle {
  background: #00aade none repeat scroll 0 0;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-size: 0.9em;
  width: 23px;
  height: 21px;
  padding-top: 2px;
}
.footer {
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
  float: left;
  margin-left: 3%;
  line-height: 23px;
}
.items {
  font-size: small;
  float: right;
  /* background-color: #00aade; */
  margin-right: 0%;
  margin-top: 25px;
  border-bottom: #00aade;
  border-width: 12px;
}
.right-content form a {
  font-size: small;
  float: right;
  margin-right: 30px;
  color: white;
}
.right-content form input {
  width: 90%;
  height: 20%;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
}
.right-content form h1 {
  font-size: xx-large;
  font-weight: 600;
}
.right-content form .checkbx {
  float: left;
  font-size: small;
}
.right-content form {
  padding-left: 25px;
  padding-right: 25px;
}
.right-content form .btn1 {
  position: absolute;
  background-color: rgb(27, 192, 33);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  box-shadow: #2d3540;
  cursor: pointer;
  border-radius: 0px;
  align-items: center;
}
.right-content form .btn:hover {
  background-color: rgba(27, 192, 33, 0.1);
}
.right-content form .checkbx {
  width: 10px;
}
.right-content .banner {
  background-color: white;
  width: 100%;
  height: 60px;
}
.n-footer .division {
  background-color: white;
  padding-top: 0 0 0 0;
  text-align: center;
  margin-top: 0%;
  color: orange;
  height: 60px;
  width: 100%;
  margin-top: 0px;
}
</style>


