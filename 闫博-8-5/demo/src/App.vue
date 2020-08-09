<template>
  <div id="app">
    <div v-if="flag" class="div_1">
      <img src="./assets/scape.png" class="img_1" alt="">
      <p style="color:#fff">请将设备扭转呈水平方向</p>
    </div>
    <div class="div_2" v-if="!flag">
      <div class="div_3">
        <img src="./assets/logo.png" class="img_3" alt="">
      </div>
      <div class="div_4">
        <div class="div_5">
        </div>
        <div class="div_6">
          <div class="div_7">
            <img src="./assets/img-1.jpg" class="div_7_img" alt="">
            <img src="./assets/img-1.jpg" class="div_7_img" alt="">
            <img src="./assets/img-1.jpg" class="div_7_img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    }
  },
  mounted () {
    // 监听 resize 方法
    window.addEventListener("resize", this.renderResize, false)
  },
  beforeDestroy () {
    // 移除监听
    window.removeEventListener("resize", this.renderResize, false)
  },
  methods: {
    renderResize() {
        // 判断横竖屏
        let width = document.documentElement.clientWidth
        let height = document.documentElement.clientHeight
        if(width > height) {
          // 横屏
          this.$data.flag = false;
        } else {
          // 竖屏
          this.$data.flag = true;
        }
    }
  }
}
</script>
<style lang="scss">
html, body{
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
@media screen and (min-width:1024px){
  .div_2{
    width: 100%;
    height: 100%;
  }
  .div_3{
    width: 100%;
    height: 200px;
    background-image: url(./assets/bg.png);
    display: flex;
    align-items: center;
    padding-left: 50px;
  }
  .div_4{
    width: 100%;
    height: 100%;
    background: #000;
    border-bottom: 2px solid #ccc;
  }
  .div_5{
    width: 100%;
    height: 10%;
    border-bottom: 2px solid #ccc;
  }
  .div_6{
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div_7{
    width: 90%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .div_7_img{
    width: 30%;
    height: 45%;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 880px)and(max-width: 1023px)  {
  .div_2{
    width: 100%;
    height: 100%;
  }
  .div_3{
    width: 100%;
    height: 10%;
    background: #000;
    display: flex;
    align-items: center;
  }
  .img_3{
    width: 20%;
    height: 100%;
    padding-left: 20px;
  }
  .div_4{
    width: 100%;
    height: 100%;
    background: #000;
    // border-bottom: 2px solid #ccc;
  }
  .div_5{
    width: 100%;
    height: 10%;
    // border-bottom: 2px solid #ccc;
  }
  .div_6{
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div_7{
    width: 90%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .div_7_img{
    width: 45%;
    height: 30%;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 670px)and(max-width: 879px)  {
  .div_2{
    width: 100%;
    height: 100%;
  }
  .div_3{
    width: 100%;
    height: 10%;
    background: #000;
    display: flex;
    align-items: center;
  }
  .img_3{
    width: 20%;
    height: 100%;
    padding-left: 20px;
  }
  .div_4{
    width: 100%;
    height: 100%;
    background: #000;
    // border-bottom: 2px solid #ccc;
  }
  .div_5{
    width: 100%;
    height: 10%;
    // border-bottom: 2px solid #ccc;
  }
  .div_6{
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div_7{
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .div_7_img{
    width: 45%;
    height: 30%;
    margin-bottom: 20px;
  }
}

// #app {
//   width: 100%;
//   height: 100%;
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
.div_1{
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img_1{
  width: 90%;
  animation:turn 1s linear infinite;      
  margin: 100px auto;
}
@keyframes turn{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
}
</style>
