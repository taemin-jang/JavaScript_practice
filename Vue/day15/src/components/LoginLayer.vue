<template>
  <div class="form-wrapper" id="wrapper-login">
    <img src="https://i.imgur.com/iqskGqe.jpg" alt="bg1" />
    <div class="content-wrapper" id="content-signin">
      <h1>{{ msg }} {{ num }}</h1>
      <form class="form-login">
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
          v-model="inputPw"
          ref="inputPw"
          type="password"
          name="password"
          placeholder="Password"
          class="input-password"
          v-bind:class="{ error: inputPwError }"
          id="input-password"
          autocomplete="off"
        />
        <p class="error_txt">{{ inputPwErrorMsg }}</p>

        <div class="custom-checkbox">
          <input v-model="idSave" type="checkbox" id="id_save" />
          <label for="id_save">아이디 저장</label>
        </div>
        <button type="submit" class="btn-login" @click="loginChk">LOGIN</button>

        <button type="submit" class="btn-login" @click="test">TEST</button>
      </form>
      <p>No account? <a href="#wrapper-signup">Sign up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginLayer",
  data() {
    return {
      inputId: "",
      inputIdError: false,
      inputIdErrorMsg: "",
      inputPw: "",
      inputPwError: false,
      inputPwErrorMsg: "",
      idSave: false,
    };
  },

  // App.vue에서 LoginLayer에서 넘긴 msg를 props로 받아서 데이터처럼 활용 가능
  // props는 배열로 받는 방법과 객체로 받는 방법이 있음
  // 배열로 받는 방법은 props: ["msg"] 이런식으로 받을 수 있고
  // 객체는 props: { msg: { } } 이런식으로 받을 수 있는데 객체로 받을 때 장점은 type, default 등도 체크할 수 있음.
  // props는 전달 받는 곳에서는 수정 불가, 전달 해주는 곳에서 수정은 가능
  props: {
    msg: {
      type: String, // type체크에는 String, Number, Array, Function, Object 가 있다
      default() {
        return "msg default"; // default 값도 리턴해줄 수 있는데 리턴 타입은 props로 전달받는 type과 같게 설정해야함. 숫자로 넘어오면 숫자로 default값 설정
      },
    },
    num: {
      type: Number, // type체크에는 String, Number, Array, Function, Object 가 있다
      default() {
        return 0; // default 값도 리턴해줄 수 있는데 리턴 타입은 props로 전달받는 type과 같게 설정해야함. 숫자로 넘어오면 숫자로 default값 설정
      },
    },
  },
  watch: {
    inputId(value) {
      if (value) {
        this.inputIdError = false;
      }
    },
    inputPw() {
      if (this.inputPw.trim() !== "") {
        this.inputPwError = false;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("id") !== null) {
      this.inputId = localStorage.getItem("id");
      this.idSave = true;
    }
  },
  methods: {
    loginChk(e) {
      e.preventDefault();

      console.log(this.inputId);
      if (this.inputId === "") {
        this.inputIdError = true;
        this.$refs.inputId.focus();
        this.inputIdErrorMsg = "아이디를 입력해주세요.";
        return;
      }
      this.inputIdError = false;

      if (this.inputPw === "") {
        this.inputPwError = true;
        this.$refs.inputPw.focus();
        this.inputPwErrorMsg = "패스워드를 입력해주세요.";
        return;
      }
      this.inputPwError = false;

      // 아이디 저장
      if (this.idSave) {
        localStorage.setItem("id", this.inputId);
      } else {
        localStorage.removeItem("id");
      }

      this.$router.push("/login/success"); // 로그인 성공시 페이지 이동
      console.log("Login success!");
    },
    test(e) {
      e.preventDefault();
      this.$emit("changeMsg"); // 부모 컴포넌트에게 changeMsg를 실행해달라고 요청은 $emit() 사용
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
  color: red !important;
}

.form-login input.error + .error_txt {
  display: block;
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
