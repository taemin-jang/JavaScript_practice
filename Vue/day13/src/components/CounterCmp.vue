// template안에는 한개의 자식 태그만 필요함(root)
<template>
  <div>
    <p>
      count : <span>{{ count }}</span>
    </p>
    <button @click="changeCount('plus')">+</button>
    <button @click="changeCount('minus')">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    changeCount(type) {
      if (type === "plus") this.count += 1;
      else this.count -= 1;
    },
  },
};
</script>

// scoped 옵션이 있으면 => 이 Vue 파일에만 적용 // scoped 옵션이 없으면 => 전체
파일에 적용
<style scoped>
p {
  color: red;
}
</style>
