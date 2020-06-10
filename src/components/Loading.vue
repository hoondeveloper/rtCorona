<template>
  <div class="loadingContainer">
    <div class="loading">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #f4f4f4;
  color: rgb(124, 124, 124);
}
</style>