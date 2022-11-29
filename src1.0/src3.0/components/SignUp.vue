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
    <h1>TCSiON</h1>
    <!-- content -->
    <div class="content">
      <div class="left-content">
        <img src="@/assets/ion-login-banner.jpg" />
        <div id="text_wrapper">
          Experience the <a id="best"> Best </a><br />
          with all new <a id="orange">TCS iON</a>
        </div>
      </div>
      <div class="right-content">
        <v-card height="725" color="rgb(125, 125, 254)">
        <v-card-text >
        <v-form id="form" @submit="validateFields" >
          <p id="errorMessages" v-if="errorMessages.length">
            <ul>
              <li v-for="e in errorMessages" v-bind:key="e.id">{{ e }}</li>
            </ul>
          </p>
          <v-card-title>Welcome</v-card-title>
          <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Username" id="username"  v-model="form.username"  placeholder="Username"
            solo /></v-row>
            <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Email Id" id="email" v-model="form.email"  placeholder="Email Id"
            solo /></v-row>
            <label for="Gender" class="heading">Gender</label>
            <v-radio-group v-model="form.gender" mandatory>
            <v-radio label="Male" value="Male"></v-radio>
            <v-radio label="Female" value="Female"></v-radio>
          </v-radio-group>
          <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Password" id="password" type="password" v-model="form.password" 
            placeholder="Password"
            solo/></v-row>
            <v-row cols="12" sm="6" md="3"> 
          <v-text-field label="Confirm Password"
            id="conf_password"
            type="password"
            v-model="form.confpassword" placeholder="Password"
            solo
          /></v-row>
          <v-btn class="success mx-0 mt-3" type="submit" >Signup</v-btn>
        </v-form>
        </v-card-text>
        </v-card>
      </div>
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
   name:'SignUp',
   data() {
    return{
      form:{
        username: null,
        email: null,
        gender:null,
        password: null,
        confpassword: null,  
      },
      user:[],
      errorMessages:[],
      lengthErrorMessage:'Username should not be less than 8 characters!',
      genderErrorMessage:'Select gender,cannot be empty',
      emailErrorMessage:'Email should have @, .com domain lowercase letters',
      passwordErrorMessage:'Password should not be less than 10 characters!',
      confpasswordErrorMessage:'Password and Confirm Password must be same'
    }
  },
  methods :{
      createObject(){
          //console.log(this.form)
          // user['username']=this.form.username;
          // user['email']=this.form.email;
          // user['password']=this.form.password;

          //save username pass email inside user as object 
          localStorage.setItem('user',JSON.stringify(this.form));
          // localStorage.setItem('username',this.form.username);
          // localStorage.setItem('email',this.form.email);
          // localStorage.setItem('password',this.form.password);
          //console.log('Data has been saved to localStorage');
          return this.form;
        },
      validateFields(e){
          this.errorMessages=[];
          if(this.form.username < 8){
              //console.log('username error!');
              this.errorMessages.push(this.lengthErrorMessage);
          }
          // if(!this.form.pickedGender){
          //   console.log('select gender');
          //   this.errorMessages.push(this.genderErrorMessage);
          // }
          if(!this.form.email){
            //console.log('email error');
            this.errorMessages.push(this.emailErrorMessage);
          }
          if(this.form.password < 10){
              //console.log('password error!');
              this.errorMessages.push(this.passwordErrorMessage);
          }
          if(this.form.confpassword !== this.form.password){
              //console.log('Confirm password error!');
              this.errorMessages.push(this.confpasswordErrorMessage);
          }
          this.validEmail(this.form.email);
          if(this.errorMessages.length == 0){
             //console.log('creating object');
             this.createObject();
             alert('Successful signup! /n You will be redirected to signin page1')
             this.$router.push('/signin');
          }
          e.preventDefault();
        },
      validEmail(email){
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      }
  }
};
</script>
<style scoped>
.header {
  height: 28px;
  background-color: #2d3540;
  color: #fff;
  width: 100%;
}
.title {
  padding: 4px 3%;
  float: left;
}
.title-img {
  padding: 5px 3%;
  float: right;
}
div {
  display: block;
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
.right-content {
  color: rgb(125, 125, 254);
  /* background-color: rgb(125, 125, 254); */
  display: inline;
  float: right;
  margin-right: 20%;
  margin-left: 60px;
  margin-bottom: 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  height: 500px;
  width: 450px;
}
.left-content {
  display: inline;
  float: left;
}
.left-content img {
  margin-left: 90px;
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
#radiobtn,
#radiobtn1 {
  width: 10px;
  height: 10px;
}
button a{
  text-decoration: none;
}
select {
  border-color: blue;
}
#phone_no {
  color: blue;
  font-weight: 800;
}
#red_text {
  color: red;
  font-weight: 800;
}
#best {
  color: blue;
  font-weight: 700;
}
#orange {
  color: orange;
  font-weight: 700;
}
#text_wrapper {
  margin-left: 120px;
  font-size: larger;
  font-weight: 600;
  width: 300px;
  height: 50px;
}
.error-style {
  border: 1px solid red;
  font-weight: 700;
}
</style>
