<template>
  <div>
    <h2>Second Component :: {{ str }}</h2>
    <ThirdComponent :str="str" @changeProp="changeProp" />
  </div>
</template>

<script>
import ThirdComponent from "@/components/ThirdComponent.vue";
export default {
  components: {
    ThirdComponent,
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
      console.log("second change prop");
      this.$emit("changeProp");
    },
  },
};
</script>

<style scoped></style>
