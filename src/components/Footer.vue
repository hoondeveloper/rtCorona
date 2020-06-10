<template>
  <div class="footer">
    <button id="thumbsup" class="thumbsup" @click="thumbsup">
      <font-awesome-icon icon="thumbs-up" />
      <span class="button-title">{{ count }}</span>
    </button>
    <br />

    <span id="description">
      COPYRIGHT 2020. 중앙대학교 임지훈. ALL RIGHTS RESERVED.
      <br />
      <br />국내 감염 정보는 질병관리본부에서 제공합니다.
      <br />전세계 감염 정보는 ncov2019.live에서 제공합니다.
    </span>
    <br />
    <!-- <span id="caulogo"></span> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      count: "불러오는 중"
    };
  },
  methods: {
    thumbsup() {
      var _vue = this;
      var boardRef = firebase.database().ref("thumbsup/");
      boardRef.once("value").then(function(snapshot) {
        var tempVal = snapshot.val().value;
        boardRef.update({ value: tempVal + 1 });
        _vue.count = tempVal + 1;
      });
    }
  },
  mounted() {
    var _vue = this;
    var boardRef = firebase
      .database()
      .ref()
      .child("thumbsup");
    boardRef.once("value").then(function(snapshot) {
      _vue.count = snapshot.val().value;
    });
  }
};
</script>

<style scoped lang="scss">
.thumbsup {
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
  padding: 5px 5px 5px 5px;
  font-size: 12px;
  color: rgb(223, 93, 93);
  transition: transform 0.6s;
}
.thumbsup:hover {
  transform: scale(1.3);
}
#caulogo {
  background-image: url("../assets/caulogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 28.5px;
  margin-top: 10px;
  text-align: center;
  display: inline-block;
}
.footer {
  margin-top: 10%;
  margin-bottom: 5%;
}
#description {
  font-size: 14px;
  color: #999;
}
.button-title {
  margin-left: 5px;
}
</style>