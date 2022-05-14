<template>
  <div class="form-wrapper" id="app">
    <img src="https://i.imgur.com/iqskGqe.jpg" alt="bg1" />
    <div class="content-wrapper" id="content-signin">
      <h1>Hello!</h1>
      <form class="form-login" v-on:submit="check">
        <input
          v-model="inputId"
          ref="inputId"
          type="text"
          name="username"
          placeholder="Username"
          class="input-username"
          v-bind:class="{ error: inputIdError }"
          id="input-username"
          autocomplete="off"
        />
        <p class="error_txt">{{ inputIdErrorMsg }}</p>
        <input
          v-model="inputPwd"
          ref="inputPwd"
          type="password"
          name="password"
          placeholder="Password"
          class="input-password"
          v-bind:class="{ error: inputPwdError }"
          id="input-password"
          autocomplete="off"
        />
        <p class="error_txt">{{ inputPwdErrorMsg }}</p>
        <div class="custom-checkbox">
          <input v-model="inputChk" type="checkbox" id="id-checkbox" />
          <label for="id-checkbox">아이디 저장</label>
        </div>
        <button type="submit" class="btn-login">LOGIN</button>
      </form>
      <p>No account? <a href="#app">Sign up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputId: "",
      inputIdError: false,
      inputIdErrorMsg: "",
      inputPwd: "",
      inputPwdError: false,
      inputPwdErrorMsg: "",
      inputChk: false,
    };
  },

  watch: {
    inputId() {
      if (this.inputId.trim() !== "") {
        this.inputIdError = false;
      }
    },
    inputPwd() {
      if (this.inputPwd.trim() !== "") {
        this.inputPwdError = false;
      }
    },
  },
  mounted() {
    console.log(localStorage.getItem("Id"));
    if (localStorage.getItem("Id") !== null) {
      this.inputId = localStorage.getItem("Id");
      this.inputChk = true;
    } else {
      this.inputChk = false;
    }
  },
  methods: {
    check(e) {
      e.preventDefault();
      if (this.inputId.trim() === "") {
        this.inputIdError = true;
        this.$refs.inputId.focus();
        this.inputIdErrorMsg = "커스텀 아이디 입력";
        return;
      }
      this.inputIdError = false;

      if (this.inputPwd.trim() === "") {
        this.inputPwdError = true;
        this.$refs.inputPwd.focus();
        this.inputPwdErrorMsg = "커스텀 비밀번호 입력";
        return;
      }
      this.inputPwdError = false;

      if (this.inputChk) {
        localStorage.setItem("Id", this.inputId);
      } else {
        localStorage.removeItem("Id", this.inputId);
      }
      console.log(this.inputChk);
      console.log(this.inputId);
      console.log(this.inputPwd);
    },
  },
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

.form-wrapper {
  width: 320px;
  height: 500px;
  border-radius: 4px;
  background: #2f366d;
  color: #fdf3f8;
  box-shadow: 0px 1px 10px 3px rgba(145, 125, 160, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.form-wrapper img {
  height: 100%;
  position: absolute;
  top: 0;
  left: -50%;
  opacity: 0.3;
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

.form-wrapper .content-wrapper {
  position: relative;
  opacity: 1;
  width: 320px;
  height: 500px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.form-login {
  margin: 4rem auto;
}

.form-login input {
  margin: 5px auto;
  display: block;
  border-radius: 4px;
  background: none;
  color: rgba(253, 243, 248, 1);
  border: 2px solid rgba(85, 112, 172, 0.8);
  padding: 10px;
  width: 200px;
  font-weight: bolder;
}

.form-login button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  display: block;
  font-weight: bolder;
  color: #fdf3f8;
  background: #ec6838;
  border: none;
  border-radius: 4px;
}

.form-login input:focus {
  outline: none;
  color: rgba(253, 243, 248, 1);
  background: rgba(85, 112, 172, 0.8);
  border-width: 2px;
  border-style: solid;
  border-color: rgba(85, 112, 172, 0.8);
}

.form-login input:hover {
  color: rgba(253, 243, 248, 1);
  background: rgba(85, 112, 172, 0.8);
  border-width: 2px;
  border-style: solid;
  border-color: rgba(85, 112, 172, 0.8);
}

.form-login button:hover {
  cursor: pointer;
  box-shadow: 0px 1px 10px 1px rgba(236, 104, 56, 0.6);
}

.form-login input.error {
  border: 2px solid red;
  background-color: #ed4848;
}

.error_txt {
  display: none;
}

/* 이거 이해가 안되서 다시 여쭤봐야함 */
.form-login input.error + .error_txt {
  display: block;
  color: red !important;
}

.form-wrapper .content-wrapper p {
  font-size: 0.7rem;
  color: rgba(223, 214, 217, 0.6);
}

.form-wrapper .content-wrapper a {
  color: #fdf3f8;
  text-decoration: none;
}

#wrapper-signup {
  opacity: 0;
  pointer-events: none;
}

#wrapper-signup:target {
  display: block;
  opacity: 1;
  pointer-events: all;
}

.custom-checkbox {
  font-size: 12px;
}

.custom-checkbox input {
  display: inline-block;
  width: auto;
  vertical-align: -2px;
}
</style>
