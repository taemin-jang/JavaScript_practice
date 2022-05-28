<template>
  <div>
    <h3>Third Component :: {{ str }} :: {{ str2 }}</h3>
    <h4>{{ $store.state.myName }}</h4>
    <button @click="change">클릭</button>
  </div>
</template>

<script>
export default {
  inject: ["str2"],
  mounted() {
    console.log(this.$store);
  },
  props: {
    str: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    change() {
      this.$emit("changeProp"); // ThirdComponent를 불러온 부모 컴포넌트에게 changeProp을 실행하라
      //console.log("changeprops");
      this.str2 = "change";
      this.$store.commit("changeMyName");
    },
  },
};
</script>

<style scoped></style>
