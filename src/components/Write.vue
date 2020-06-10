<template>
  <div class="container">
    <div class="main">
      <div id="logo"></div>
      <h1 id="title">개발자에게 한마디</h1>

      <button id="back" class="button-long-2" @click="goBack">
        <span class="button-title-2">뒤로가기</span>
      </button>
      <div class="inputBox-title">
        <input class="input-title" type="text" placeholder="제목" v-model="title" />
      </div>
      <span class="inputBox-contents">
        <textarea class="input-contents" type="text" placeholder="내용" v-model="contents" />
      </span>
      <button id="board" class="button-long" @click="submit" @mouseover="btnMouseOver">
        <span class="button-title">등록</span>
      </button>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
import firebase from "firebase";

export default {
  components: {
    "main-footer": Footer
  },
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    goHome() {
      this.$router.push("/");
    },
    btnMouseOver() {
      //document.getElementById("map").
    },
    submit() {
      if (this.title === "") {
        alert("제목을 입력해주세요.");
      } else if (this.contents === "") {
        alert("내용을 입력해주세요.");
      } else {
        firebase
          .database()
          .ref("board/")
          .push({
            title: this.title,
            contents: this.contents,
            createdtime: Date.now()
          });
        // this.$router.push("board");
        alert("감사합니다!");
        this.$router.push("/");
      }
    }
  },
  created() {
    document.getElementById("loading").style.display = "none";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #444;
  margin-bottom: 3%;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  padding-top: 9px;
  opacity: 1;
  transition: opacity 0.6s, box-shadow 0.6s, transform 0.6s;
}
li:hover {
  box-shadow: 0px 0px 20px #00000014;
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
.list {
  width: 100%;
  display: inline-block;
}
.inputBox-title {
  background-color: rgb(248, 248, 248);
  width: 100%;
  margin-top: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 10px 10px 0 0;
  display: inline-block;
}
.inputBox-contents {
  background-color: rgb(248, 248, 248);
  height: 300px;
  width: 100%;
  margin-bottom: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 0 0 10px 10px;
  display: inline-block;
}
.input-title {
  background-color: transparent;
  border: 0;
  width: 96%;
  font-size: 14px;
  color: #666;
  margin-left: 2%;
  text-align: left;
  display: flex;
}
.input-contents {
  vertical-align: top;
  background-color: transparent;
  border: 0;
  width: 96%;
  height: 300px;
  font-size: 14px;
  color: #666;
  margin-left: 2%;
  text-align: left;
  display: flex;
}
.button-long {
  border: none;
  float: left;
  margin-bottom: 3%;
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
.button-long-2 {
  border: none;
  margin-top: 3%;
  float: left;
  width: 100%;
  height: 45px;
  background: #f5f5f5;
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
#map {
  margin-right: 3%;
}
</style>
