<template>
  <div class="container">
    <div class="main">
      <div id="logo"></div>
      <h1 id="title">신종 코로나 관련소식</h1>
      <a href="https://news.naver.com/main/hotissue/sectionList.nhn?mid=hot&sid1=102&gid=1086319">
        <main-alert
          mode="warning"
          message="소식 실시간 업데이트가 서버 부하로 중지되었습니다. 클릭하시면 네이버 실시간 속보 페이지로 이동합니다."
        ></main-alert>
      </a>
      <div class="contents">
        <div class="documents">
          <ul>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=088&aid=0000631678"
            >
              <li class="document">
                <span class="new">N</span>[속보] 신종코로나 19번째 확진자 발생 "싱가포르 방문 36세男""
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=025&aid=0002972834"
            >
              <li class="document">
                <span class="new">N</span>16번 확진자 감염 미스터리···질본 "우리가 봐도 이상하다"
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=011&aid=0003689405"
            >
              <li class="document">
                <span class="new">N</span>신종 코로나 진단시약 긴급 사용 승인...2월 7일부터 검사 가능
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=469&aid=0000463369"
            >
              <li class="document">
                <span class="new">N</span>[속보] 중국 신종 코로나 사망 425명, 확진 2만명 넘어서
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=469&aid=0000463266"
            >
              <li class="document">
                <span class="new">N</span>[속보] 육군 일병, 신종 코로나 ‘12번 환자’ 접촉… 軍 “격리 조치”
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=001&aid=0011375460"
            >
              <li class="document">
                <span class="new">N</span>이종구 교수 "신종코로나, 소변·대변 통한 전염 가능성 있다"
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=421&aid=0004441707"
            >
              <li class="document">
                <span class="new">N</span>'불행중 다행' 2번환자 퇴원 임박…1번환자 일상생활(종합)
              </li>
            </a>
            <a
              href="http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=001&aid=0011372879"
            >
              <li class="document">
                <span class="new">N</span>인천발 중국행 항공기에 신종코로나 의심환자…승객 40명 격리
              </li>
            </a>
            <a
              href="https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=104&oid=001&aid=0011372088"
            >
              <li class="document">
                <span class="new">N</span>필리핀서 신종코로나 첫 사망자 발생…중국 외 처음(종합)
              </li>
            </a>
          </ul>
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
import Alert from "./Alert";

export default {
  components: {
    "main-footer": Footer,
    "main-alert": Alert
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  text-align: left;
  white-space: nowrap;
  color: #444;
  margin-bottom: 3%;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  padding-top: 9px;
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
.contents {
  width: 100%;
  margin-top: 3%;
  display: inline-block;
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
.new {
  width: 15px;
  height: 15px;
  border-radius: 5px;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  color: white;
  font-size: 10px;
  background-color: #ff5c5c;
  display: inline-block;
  line-height: 13px;
}
</style>
