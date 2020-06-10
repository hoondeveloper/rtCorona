<template>
  <div class="container">
    <loading-alert message="정보를 읽어오는 중입니다. 시간이 걸릴 수 있습니다."></loading-alert>
    <div class="main">
      <div id="logo"></div>
      <h1 id="title">전세계 감염 현황</h1>

      <div class="contents">
        <div class="dashboard">
          <div id="confirmed" class="dashboard-status">
            <span class="count">{{ this.$store.state.intlDashboard.confirmed }}</span>
            <div class="dashboard-status-title">
              <span class="dashboard-title">확진</span>
            </div>
          </div>
          <div id="dead" class="dashboard-status">
            <span class="count">{{ this.$store.state.intlDashboard.death }}</span>
            <div class="dashboard-status-title">
              <span class="dashboard-title">사망</span>
            </div>
          </div>
        </div>

        <div class="table" style="margin-right: 3%;">
          <h3>확진자</h3>
          <table>
            <tbody>
              <tr v-bind:key="index" v-for="(item, index) in this.$store.state.intlData">
                <tb>{{ item.country }}</tb>
                <td>{{ item.confirmed }}</td>
              </tr>
            </tbody>
          </table>
          <span class="timestamp">{{ timestamp }}</span>
        </div>
        <div class="table">
          <h3>사망자</h3>
          <table>
            <tbody>
              <tr v-bind:key="index" v-for="(item, index) in this.$store.state.intlData">
                <tb>{{ item.country }}</tb>
                <td>{{ item.death == -1 ? "-" : item.death }}</td>
              </tr>
            </tbody>
          </table>
          <span class="timestamp">{{ timestamp }}</span>
        </div>

        <button id="back" class="button-long-2" @click="goHome">
          <span class="button-title-2">메인으로</span>
        </button>
      </div>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";

export default {
  components: {
    "main-footer": Footer
  },
  data() {
    return {
      timestamp: "ncov2019.live 실시간 제공",
      dashboard: [],
      data: []
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    btnMouseOver() {
      //document.getElementById("map").
    }
  },
  created() {
    document.getElementById("loading").style.display = "none";
  }
};
</script>

<!-- Add"scoped"attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
th {
  width: 50%;
}
td {
  width: 50%;
}
tbody {
  width: 100%;
  line-height: 2rem;
}
a {
  text-decoration: none;
}
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style-type: none;
}
li {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #444;
  margin-bottom: 3%;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5em;
  opacity: 1;
  transition: opacity 0.6s, transform 0.6s;
}
li:hover {
  transform: scale(1.03);
  opacity: 0.8;
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
  width: 87.4px;
  height: 46px;
  margin: 0 auto;
}
.dashboard {
  display: flex;
  margin-bottom: 3%;
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
  width: 48.5%;
  float: left;
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
  font-size: 38px;
  letter-spacing: -0.03em;
  font-weight: bold;
  color: #ffffff;
  opacity: 1;
  position: relative;
}

#confirmed {
  margin-right: 3%;
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

#dead {
  background: transparent linear-gradient(127deg, #3b80c1 0%, #20dae6 100%) 0%
    0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  transition: box-shadow 0.6s, opacity 0.6s, transform 0.6s;
}

#dead:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px #259fe533;
  opacity: 0.8;
}

.contents {
  width: 100%;
  margin-top: 3%;
  display: inline-block;
}
.documents {
  text-align: left;
}
.button-long-2 {
  border: none;
  float: left;
  margin-bottom: 3%;
  width: 100%;
  height: 45px;
  background: #fff;
  border-radius: 10px;
  opacity: 1;
  transition: opacity 0.6s, box-shadow 0.6s, transform 0.6s;
}
.button-long-2:hover {
  transform: scale(1.03);
  opacity: 0.8;
}
.button-title {
  color: white;
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
}
.button-title-2 {
  color: #444;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
}
th {
  color: #555;
  padding-right: 15px;
}
td {
  color: #666;
}
.table {
  border-radius: 10px;
  background-color: #f4f4f4;
  width: 48.5%;
  height: 100%;
  opacity: 1;
  float: left;
  transition: opacity 0.6s, transform 0.6s;
  padding-bottom: 15px;
  margin-bottom: 3%;
}
// .table:hover {
//   transform: scale(1.03);
//   opacity: 0.8;
// }
.timestamp {
  font-size: 14px;
  color: #777;
}
</style>
