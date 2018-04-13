<template>
  <Carousel :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :trigger="setting.trigger"
            :arrow="setting.arrow">
    <Carousel-item>
      <div class="carousel" style="background-image: url('https://assets.lambda-study.com/images/bg-29.jpg?imageslim')">
        <div class="content">
          <p class="txt min-txt">成为更好的自己</p>
          <p class="txt large-txt">程序员学习社区</p>
        </div>
      </div>

    </Carousel-item>

    <Carousel-item>
      <div class="carousel" style="background-image: url('https://assets.lambda-study.com/lambda/banner/banner3.jpg?imageslim')">

      </div>
    </Carousel-item>

  </Carousel>
</template>
<script>
  export default {
      data() {
        return {
          setting: {
            autoplay: false,
            autoplaySpeed: 20000,
            dots: 'inside',
            trigger: 'click',
            arrow: 'hover'
          }
        }
      }
  }
</script>

<style scoped lang="less">
  .carousel {
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    margin-top: -55px;
    text-align: center;
    height: 365px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .content {
      margin-top: 80px;
      .txt {
        color: #fff;
      }
      .min-txt {
        font-size: 25px;
      }
      .large-txt {
        font-size: 50px;
      }
    }

  }
</style>
