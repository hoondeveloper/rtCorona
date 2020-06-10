<template>
  <div class="alertContainer">
    <div class="alert" v-if="mode === 'alert'">
      <span>{{ message }}</span>
    </div>
    <div class="warning" v-if="mode === 'warning'">
      <span>{{ message }}</span>
    </div>
    <div class="good" v-if="mode === 'good'">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode", "message"]
};
</script>

<style scoped>
.alert {
  margin-top: 3%;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #f4f4f4;
  color: rgb(124, 124, 124);
}
.warning {
  margin-top: 3%;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #f16262;
  color: white;
}
.good {
  margin-top: 3%;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #d9edf7;
  color: #31708f;
}
</style>