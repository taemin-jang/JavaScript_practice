<template>
  <div>
    <h1>ProductViewDetail : {{ $route.params.idx }}</h1>
    <p>{{ str }}</p>
    <button @click="test">클릭</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "hello",
    };
  },
  mounted() {
    console.log(this.$route); // 주소에 있는 값을 가져올 때 route
    console.log(this.$route.query.orderby);
    console.log(this.$route.params.idx);
    console.log(this.str);
  },
  methods: {
    test() {
      this.$router.push("/"); // 주소를 입력할 때는 router
    },
  },
};
</script>

<style scoped></style>
