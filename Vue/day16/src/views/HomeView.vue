<template>
  <div>
    <h1>Home View</h1>
    <FirstComponent v-bind:str="str" @changeProp="changeProp" />
  </div>
</template>

<script>
import FirstComponent from "@/components/FirstComponent.vue";
export default {
  components: {
    FirstComponent,
  },
  provide() {
    return {
      str2: "new from homeview",
    };
  },
  data() {
    return {
      str: "from homeview",
    };
  },
  methods: {
    changeProp() {
      console.log("Home view");
      this.str = "change!!!!";
    },
  },
};
</script>

<style FirstComponentscoped></style>
