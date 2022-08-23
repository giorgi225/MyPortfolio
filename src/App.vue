<template>
  <div class="background rv">
    <div id="block1"></div>
    <div id="block2"></div>
    <div id="block3"></div>
    <div id="block4"></div>
  </div>

  <div class="main-cont">
    <mainComponent />
  </div>

  <CustomCursor />
</template>

<script>
  import CustomCursor from "@/components/CustomCursor.vue";
  import mainComponent from "@/components/mainComponent.vue";

  export default {
    components: {
      CustomCursor,
      mainComponent,
    },
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    cursor: none;
    box-sizing: border-box;
  }

  body {}

  .background {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(45deg, #ffc7ad, #ffa776);
    z-index: -1;
  }

  #block1 {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background: #FFF;
    opacity: 0.3;
    position: absolute;
    animation: block1 20s ease-in-out infinite;
  }

  #block2 {
    width: 200px;
    height: 200px;
    background: #FFF;
    opacity: 0.3;
    position: absolute;
    animation: block2 20s ease-in-out infinite;
  }

  #block3 {
    width: 150px;
    height: 150px;
    background: #FFF;
    opacity: 0.3;
    position: absolute;
    animation: block3 25s ease-in-out infinite;
  }

  #block4 {
    width: 50px;
    height: 50px;
    background: #FFF;
    opacity: 0.3;
    position: absolute;
    animation: block4 25s ease-in-out infinite;
  }

  @keyframes block1 {
    0% {
      bottom: -100px;
      left: 50px;
      transform: rotate(360deg);
    }

    100% {
      left: 50%;
      bottom: 120%;
    }
  }

  @keyframes block2 {
    0% {
      bottom: -500px;
      right: 50px;
      transform: rotate(360deg);
    }

    100% {
      right: 50px;
      bottom: 120%;
    }
  }

  @keyframes block3 {
    0% {
      right: -500px;
      top: 50%;
      transform: rotate(360deg);
    }

    100% {
      top: 50%;
      right: 120%;
    }
  }

  @keyframes block4 {
    0% {
      top: -100px;
      left: 200px;
      transform: rotate(360deg);
    }

    100% {
      top: 120%;
      left: 200px;
    }
  }

  .main-cont {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 60px;
    justify-content: center
  }

  @import url('@/assets/css/bundle.css');

  .content-title-d {
    position: relative;
    widows: 100%;
    padding: 15px 20px;
  }

  .content-title-d::before {
    position: absolute;
    content: "";
    left: -50px;
    bottom: 0px;
    height: 1px;
    width: 90%;
    background: linear-gradient(45deg, #4b4c5bc4, #ffffff12);
  }

  .fx-center {
    display:flex;
    align-items: center;
  }
  .mr-11 {
    margin-right: 11px;
  }
  .content-title-d h3 {
    color: #383946;
    text-transform: uppercase;
  }

  .about-me-text {
    position: relative;
    padding: 15px 20px;
  }

  .about-me-text .text {
    position: relative;
    line-height: 140%;
    font-size: 14px;
    text-transform: none;
    letter-spacing: 1px;
    padding-bottom: 11px;
    color: #30313a;
    margin-bottom: 12px;
  }

  .about-me-text .text::before {
    position: absolute;
    content: "";
    left: 0px;
    bottom: 0px;
    height: 1px;
    width: 95%;
    background: linear-gradient(45deg, #6e6f84c4, #ffffff12);
  }
  .ct {
    
    position: relative;
    width: 100%;
    height: 100%;
    /* background: #FFF; */
    overflow: auto;
    padding: 16px 0px 17px 0px;
}
.content {
    background: #FFF;

} 
  /* width */
.ct::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.ct::-webkit-scrollbar-track {
  background: #f1f1f1; 
    border-radius: 6px;
}
 
/* Handle */
.ct::-webkit-scrollbar-thumb {
  background: #484959;
    border-radius: 6px;
}

/* Handle on hover */
.ct::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>