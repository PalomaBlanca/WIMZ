<template>
  <header class="header container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="hamburg">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import VueTypes from 'vue-types'
export default {
    name: 'ACHeader',

    mounted() {
      this.hamburger();
    },

    methods: {
      hamburger() {
        var hamburger = document.querySelector(".hamburg");
          hamburger.onclick = function () {
          this.classList.toggle ("checked");
        }
      }
    }
}
</script>
<style lang="scss" scoped>
@import '@/sass/utils.scss';

.header {
  height: 60px;
  background-color: $main-blue;
  display: flex;
  align-items: center;
  border-bottom: 3px solid $main-white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  justify-content: flex-end;
  position: fixed;
  z-index: 9;
}

.hamburg {
   display: block;
   width: 35px;
   height: 50px;
   position: relative;
   border-radius: 4px;
   transition: border-radius .5s;
}

.line {
   position: absolute;
   height: 6px;
   width: 35px;
   background: $main-white;
   display: block;
   transition: 0.5s;
   transform-origin: center;
}

.line:nth-child(1) { top: 14px; }
.line:nth-child(2) { top: 24px; }
.line:nth-child(3) { top: 34px; }

.hamburg.checked .line:nth-child(1){
   transform: translateY(10px) rotate(-45deg);
}

.hamburg.checked .line:nth-child(2){
   opacity:0;
}

.hamburg.checked .line:nth-child(3){
   transform: translateY(-10px) rotate(45deg);
}

</style>
