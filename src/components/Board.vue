<template>
  <div class="container">
    <div class="main">
      <div id="logo"></div>
      <h1 id="title">개발자에게...</h1>

      <div class="list">
        <div class="documents">
          <ul>
            <li
              class="document"
              v-bind:key="item.index"
              v-for="item in this.items"
              @click="showDocument(item)"
            >
              <span class="new">N</span>
              {{ item.title }}
            </li>
          </ul>
        </div>

        <button id="board" class="button-long" @click="write" @mouseover="btnMouseOver">
          <span class="button-title">글쓰기</span>
        </button>
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
import firebase from "firebase";

export default {
  components: {
    "main-footer": Footer
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    showDocument(item) {
      this.$router.push({ name: "contents", params: item });
    },
    goHome() {
      this.$router.push("/");
    },
    btnMouseOver() {
      //document.getElementById("map").
    },
    write() {
      this.$router.push("write");
    }
  },
  mounted() {
    var list = new Array();
    var boardRef = firebase
      .database()
      .ref()
      .child("board");
    var index = 1;
    boardRef
      .once("value", function(snapshot) {
        snapshot.forEach(it => {
          var item = it.val();
          var data = {
            key: it.key,
            index: index,
            title: item.title,
            contents: item.contents,
            createdtime: item.createdtime
          };
          index++;
          list.push(data);
        });
        list.reverse();
      })
      .then();
    this.items = list;
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
  text-align: left;
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
.list {
  margin-top: 3%;
  width: 100%;
  display: inline-block;
}
.contents {
  width: 100%;
  display: inline-block;
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
  margin-bottom: 3%;
  float: left;
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
#map {
  margin-right: 3%;
}
.new {
  width: 15px;
  height: 15px;
  border-radius: 5px;
  text-align: center;

  margin-left: 0.5rem;
  color: white;
  font-size: 10px;
  background-color: #ff5c5c;
  display: inline-block;
  line-height: 13px;
}
</style>
