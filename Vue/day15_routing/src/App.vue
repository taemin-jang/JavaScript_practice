<template>
  <div id="app">
    <!-- v-bind는 자신의 속성 데이터 값을 받고싶을 때 사용 
    만약 v-bind:msg로 안쓰고 msg="msg"로 하면 그냥 msg 텍스트가 LoginLayer.vue에 props로 전송이 되기 때문에
    msg의 데이터를 받고 싶으면 v-bind:msg를 사용해야 한다. v-bind:msg는 :msg로 줄여서 사용 가능하다. v-on:changeMsg는 @changeMsg로 줄일 수 있음-->
    <LoginLayer v-bind:msg="initMsg" :num="num" v-on:changeMsg="change" />
  </div>
</template>

<script>
import LoginLayer from "./components/LoginLayer.vue";

export default {
  name: "App",
  data() {
    return {
      num: 24,
      min: 0,
      max: 3,
      msg: ["Taemin", "Sarah"],
    };
  },
  components: {
    LoginLayer,
  },
  // 여기에 정의되어 있는 함수 이름이 데이터처럼 사용할 수 있음
  computed: {
    initMsg() {
      return this.msg[
        Math.floor(Math.random() * (this.msg.length - this.min)) + this.min
      ];
    },
  },
  methods: {
    change() {
      this.msg = ["사과", "바나나", "오렌지"];
    },
  },
};
</script>
