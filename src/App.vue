<template>
  <div id="app">
    <vue-headful title="실시간 코로나" description="Real-Time Corona" />
    <div id="loading">
      <span>
        COVID-19 데이터를 불러오는 중입니다.
        <br />
      </span>
      <span style="font-size: 10px">장시간 접속이 안될 경우 새로고침을 해주세요.</span>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script async src="https://www.googletagmanager.com/gtag/js"></script>
<script>
import axios from "axios";

export default {
  template: {},
  created() {
    axios
      .get("https://us-central1-idalerter.cloudfunctions.net/getDomestic2")
      .then(res => {
        this.$store.state.domesticData = res.data;
        console.log(this.$store.state.domesticData);
      });
    axios
      .get("https://us-central1-idalerter.cloudfunctions.net/getHtml")
      .then(res => {
        this.$store.state.intlDashboard = res.data;
        console.log(this.$store.state.intlDashboard);
      });
    axios
      .get("https://us-central1-idalerter.cloudfunctions.net/getData")
      .then(res => {
        this.$store.state.intlData = res.data;
        document.getElementById("loading").style.display = "none";
        console.log(this.$store.state.intlData);
      });
  }
};
</script>

<style lang="scss">
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
* {
  font-family: "Spoqa Han Sans", "Sans-serif";
}
#app {
  margin-right: 3%;
  margin-left: 3%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: #555;
}
h2 {
  color: #555;
}
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#loading {
  position: absolute;
  margin-top: 3%;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #f4f4f4;
  color: rgb(124, 124, 124);
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
