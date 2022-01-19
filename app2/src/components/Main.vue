<template>
  <div class="hello">
    <div id="screenshot">
      <!-- <div><router-link to="/">主页</router-link></div>
      <div><router-link to="/demos">行业案例</router-link></div>
      <div><router-link to="/about">关于我们</router-link></div>
      <div><router-link to="/contact">联系我们</router-link></div> -->
      <div ref="page">
				<div>
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
				<el-button type="primary" @click="userLogin">login</el-button>
        <span v-if="this.$store.state.show">已登录</span>
				</div>
        <span>用户登陆： {{status}} </span>
				<hr />
				<div>
					<input v-model="number1" placeholder="number1"><br />
					<input v-model="number2" placeholder="number2"><br />
					<button @click="addNumber">两个数字相加</button>
				</div>
        <FormVal></FormVal>
				<div>
					<span style="color: red;font-size: 40;">两个数的结果是：{{sum}}</span>
				</div>
        <div>
          <button @click="screenShot">屏幕截图</button>
          <img :src="imgUrl" v-show="imgUrl" width="200px" height="200px" />
        </div>
      </div>
      <vue-sign />
      <div id="page" style="color: black;background: white;" >
        <h3>PDF for Test</h3>
        <p>Here is some content for testing!!</p>
      </div>
      <iframe id="iframe123" frameborder="0" width="400" height="300"></iframe>
    </div>
    <div class="detail-left">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { XAHC_LOGIN_ACTION,XAHC_NUMBERADD_ACTION } from "../store/mutation-types";
import Html2canvas from "html2canvas";
import jsPDF from "jspdf"
import VueSign from "./vue-sign.vue"
import FormVal from "./form.vue"
export default {
  name: "Header",
  components: {
    VueSign,
    FormVal
  },
  data() {
    return {
      userName: "",
			number1: 1,
			number2:2,
      imgUrl: '',
      
    };
  },
  mounted() {
    debugger
    this.$refs.page.addEventListener("scroll",() => {
      console.log("scroll")
    },true)
  },
  computed: mapGetters({
    status: "getStatus",
		sum: "getResult"
  }),
  methods: mapActions({
    userLogin(dispatch) {
      const { userName } = this;
      if (userName.trim()) {
        dispatch(XAHC_LOGIN_ACTION, {
          userName
        });
        // this.userName = "";
      }else {
				alert("请输入用户名");
			}
    },
    onSubmit() {
      console.log('submit!');
      console.log(this.$refs["form"])
    },
    
    screenShot(){
      var canvas = document.createElement("canvas");
		  var context = canvas.getContext("2d");

      const screenshot = document.getElementById("page");

      let _scale = window.devicePixelRatio;

      const w = document.getElementById("page").clientWidth;
      const h = document.getElementById("page").clientHeight;
      canvas.width = w * _scale;
		  canvas.height = h * _scale;
      context.scale(_scale, _scale);

      const opts = {
          scale: window.devicePixelRatio,
          dpi: 300,
		      logging: true,
          width: w * _scale,
          height:h * _scale
      };
      Html2canvas(screenshot, opts).then(res => {
          const { height, width } = res;
          const imgUrl = res.toDataURL("image/png", 1);
          var newImg = document.createElement("img");
          newImg.src =  imgUrl;
          newImg.style.width = canvas.width/2 + 'px';
          newImg.style.height = canvas.height/2 + 'px';

         let pdf = new jsPDF('', 'pt', 'a4');
          pdf.addImage(newImg, 'PNG',0,0,w,h);
          pdf.save('test.pdf');
          // document.getElementById("iframe123").src = pdf.output('datauristring');

      }, () => alert("截图失败，请重新尝试"));
    },
		addNumber(dispatch){
			const {number1: a, number2:b} = this;
			dispatch(XAHC_NUMBERADD_ACTION, {
			  a,
				b
			});
		}
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  background-color: #363636;
  color: #fff;
}
.nav > div {
  width: 100px;
  height: 50px;
  line-height: 50px;
}
a {
  color: #fff;
  text-decoration: none;
}
.detail-left {
  background-color: #ccc;
  height: 600px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
}
</style>
