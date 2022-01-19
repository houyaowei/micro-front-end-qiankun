<template>
  <div>
    <canvas
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        ref="signRef"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "vue-sign.vue",
  data(){
    return {
      points: [],
      canvasCtx: null,
      isDown: false,
      color: "#000",
      linewidth: 3
    }
  },
  mounted() {
    let canvas = this.$refs.signRef;
    canvas.height = 300;
    canvas.width = 600;
    // this.canvasRect = canvas.getBoundingClientRect()
    // console.log(this.canvasRect);
    this.canvasCtx = canvas.getContext("2d");
    this.canvasCtx.strokeStyle = this.color;
    this.canvasCtx.lineWidth = this.linewidth;
  },
  methods: {
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.canvasCtx.save()
      if (ev.touches.length == 1) {
        const _e = ev.targetTouches[0];
        const obj = {
          x: _e.clientX,
          y: _e.clientY-100
        };
        this.points.push(obj);
        this.canvasCtx.beginPath();
      }
    },
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length == 1) {
        const _e = ev.targetTouches[0];
        let obj = {
          x: _e.clientX,
          y: _e.clientY-100
        };
        this.points.push(obj);
        //开始绘图
        if (this.points.length > 1){
          this.drawPoints()
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.points = [];
      this.canvasCtx.closePath();//收笔
      this.canvasCtx.restore()
    },
    mouseDown(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.canvasCtx.save()
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      // this.startX = obj.x;
      // this.startY = obj.y;
      this.canvasCtx.beginPath();
      this.points.push(obj);
      this.isDown = true;
    },
    mouseMove(ev) {
      // console.log("mouse move")
      ev = ev || event;
      ev.preventDefault();
      if (this.isDown) {
        let obj = {
          x: ev.offsetX ,
          y: ev.offsetY
        };
        this.points.push(obj);
        // this.canvasCtx.moveTo(this.startX, this.startY);//移动画笔
        // this.canvasCtx.lineTo(obj.x, obj.y);//创建线条
        // this.canvasCtx.stroke();
        if (this.points.length > 1){
          this.drawPoints()
        }
      }
    },
    mouseUp(ev) {
      ev = ev || event;
      ev.preventDefault();
      this.points = []
      this.canvasCtx.closePath();//收笔
      this.isDown = false;
      this.canvasCtx.restore()
    },
    drawPoints(){
      let point1 = this.points[0]
      let point2 = this.points[1]
      this.points.shift()
      this.canvasCtx.moveTo(point1.x, point1.y)
      this.canvasCtx.lineTo(point2.x, point2.y)
      this.canvasCtx.stroke()
    }
  }
}
</script>

<style scoped>
  canvas {
    border: 1px dashed;
    height: 500px;
    width: 500px;
  }
</style>
