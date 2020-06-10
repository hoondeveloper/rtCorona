<template>
  <div class="container">
    <span v-show="loading">로딩 중입니다.</span>
    <div class="main">
      <div id="logo"></div>
      <div id="slider">
        <h1 class="sld_title">실시간 업데이트 제공!</h1>
        <p class="sld_description">
          정보를 일일이 수동으로 기입하던 시스템에서
          <br />여러분들께 보다 더 빠르게 정보를 제공하기 위해
          <br />실시간 정보 업데이트 기능을 구현하였습니다.
        </p>
      </div>
      <main-alert mode="alert" message="요즘은 네이버가 더 잘하더라구요.."></main-alert>
      <div class="dashboard">
        <div id="confirmed" class="dashboard-status">
          <span class="count">{{ this.$store.state.domesticData[0].count }}</span>
          <div class="dashboard-status-title">
            <span class="dashboard-title">확진자</span>
          </div>
        </div>
        <div id="examining" class="dashboard-status">
          <span class="count">{{ this.$store.state.domesticData[1].count }}</span>
          <div class="dashboard-status-title">
            <span class="dashboard-title">퇴원자</span>
          </div>
        </div>
        <div id="released" class="dashboard-status">
          <span class="count">{{ this.$store.state.domesticData[3].count }}</span>
          <div class="dashboard-status-title">
            <span class="dashboard-title">사망자</span>
          </div>
        </div>
      </div>
      <div class="contents">
        <button id="confinfo" class="button" @mouseover="btnMouseOver" @click="goThere('confinfo')">
          <span class="button-title">확진자 정보</span>
        </button>
        <button
          id="self_diagnosis"
          class="button"
          @mouseover="btnMouseOver"
          @click="goThere('news')"
        >
          <span class="button-title">관련 소식통</span>
        </button>
        <button id="global" class="button" @mouseover="btnMouseOver" @click="goThere('globalinfo')">
          <span class="button-title">전세계 감염 현황</span>
        </button>
        <a href="http://www.mohw.go.kr/react/popup_200128.html">
          <button id="selected_hospital" class="button">
            <span class="button-title">선별진료소 현황</span>
          </button>
        </a>
        <button id="board" class="button-long" @mouseover="btnMouseOver" @click="goThere('write')">
          <span class="button-title">개발자에게 한마디</span>
        </button>
      </div>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
import Alert from "./Alert";

export default {
  data() {
    return {
      data: null,
      loading: false
    };
  },
  components: {
    "main-footer": Footer,
    "main-alert": Alert
  },
  methods: {
    btnMouseOver() {
      //document.getElementById("map").
    },
    goThere(where) {
      this.$router.push(where);
    }
  },
  created() {
    document.getElementById("loading").style.display = "none";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sld_title {
  color: white;
  display: inline-block;
  margin-top: 50px;
  text-shadow: 0px 0px 40px #000000ad;
}
.sld_description {
  margin: 0;
  color: white;
  text-shadow: 0px 0px 40px #000000ad;
}
.container {
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.main {
  width: 100%;
  margin-top: 15%;
  margin-bottom: 25%;
  vertical-align: middle;
  position: absolute;
}
#logo {
  background-image: url("../assets/logo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 190px;
  height: 100px;
  margin: 0 auto;
}
#slider {
  background-image: url("../assets/jumb_04.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  opacity: 1;
  margin-top: 10%;
  transition: box-shadow 0.6s, opacity 0.6s, transform 0.6s;
}
#slider:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px #64646433;
  opacity: 0.8;
}
.dashboard {
  display: flex;
  margin-top: 3%;
}
.dashboard-title {
  position: relative;
  font-size: 14px;
}
.dashboard-var {
  position: relative;
  font-size: 12px;
  font-weight: 600;
  margin-left: 2px;
}
#var-nonchange {
  color: #666;
}
#var-bad {
  color: rgb(241, 94, 94);
}
#var-good {
  color: rgb(94, 163, 241);
}
.dashboard-status {
  width: 32%;
  float: left;
  margin-right: 3%;
  height: 95px;
}
.dashboard-status-title {
  width: 94%;
  height: 30px;
  background: #f4f4f4 0 0 no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  position: absolute;
  margin-left: 3%;
  margin-bottom: 3%;
  bottom: 0;
}
.count {
  text-align: center;
  font-size: 40px;
  letter-spacing: -0.03em;
  font-weight: bold;
  color: #ffffff;
  opacity: 1;
  position: relative;
}

#confirmed {
  background: transparent linear-gradient(289deg, #dd9558 0%, #ef6e6e 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  transition: box-shadow 0.6s, opacity 0.6s, transform 0.6s;
}

#confirmed:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px #e0631633;
  opacity: 0.8;
}

#examining {
  background: transparent linear-gradient(127deg, #52d9ab 0%, #9ce37c 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  transition: box-shadow 0.6s, opacity 0.6s, transform 0.6s;
}

#examining:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px #25e55133;
  opacity: 0.8;
}

#released {
  margin-right: 0px !important;
  background: #7c7c7c 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  transition: box-shadow 0.6s, opacity 0.6s, transform 0.6s;
}

#released:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px #00000033;
  opacity: 0.8;
}

.contents {
  width: 100%;
  display: inline-block;
}
.button {
  border: none;
  float: left;
  margin-top: 3%;
  width: 48.5%;
  height: 45px;
  background: transparent linear-gradient(79deg, #0b75f0 0%, #1bc7c1 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  transition: opacity 0.6s, box-shadow 0.6s, transform 0.6s;
}
.button:hover {
  transform: scale(1.03);
  opacity: 0.8;
  box-shadow: 0px 0px 15px #14a4d04d;
}
.button-long {
  border: none;
  margin-top: 3%;
  float: left;
  width: 100%;
  height: 45px;
  background: transparent linear-gradient(79deg, #0b75f0 0%, #1bc7c1 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  transition: opacity 0.6s, box-shadow 0.6s, transform 0.6s;
}
.button-long:hover {
  transform: scale(1.03);
  opacity: 0.8;
  box-shadow: 0px 0px 15px #14a4d04d;
}
.button-title {
  color: white;
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
}
#confinfo {
  margin-right: 3%;
}
#global {
  margin-right: 3%;
}
</style>
