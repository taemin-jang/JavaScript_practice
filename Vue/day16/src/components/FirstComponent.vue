<template>
  <div>
    <h1>First Component :: {{ str }}</h1>
    <SecondComponent :str="str" @changeProp="changeProp" />
  </div>
</template>

<script>
import SecondComponent from "@/components/SecondComponent.vue";
export default {
  components: {
    SecondComponent,
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
    changeProp() {
      console.log("First change prop");
      this.$emit("changeProp");
    },
  },
};
</script>

<style scoped></style>
