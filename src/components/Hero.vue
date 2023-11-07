<template>
    <swiper :pagination="true" :modules="modules" :autoplay="true" class="mySwiper">
        <swiper-slide class="slide_wrapper"><img src="../assets/img/hero/hero1.png" alt="">
            <!-- <span>Бидний зорилго
                Хүртээмжтэйгээр хөдөлмөр эрхлэлтийн соёлыг хэвшүүлэхэд тухайн ажилтанд үр 
                дүнтэй байхуйц боломжит тохируулгыг хэрхэн тодорхойлон хэрэгжүүлж болохыг мэргэжлийн 
                болон мэргэжлийн бус бүх оролцогч талд орон зайн хязгааргүйгээр түгээхийг зорилоо.
            </span> -->
        </swiper-slide>
      <swiper-slide><img src="../assets/img/hero/hero2.png" alt=""></swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';

export default {
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style>
.mySwiper img {
    max-width: 1920px;
    width: 100%;
}


.slide_wrapper {
    position: relative;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    left: -36%;
}

.swiper-pagination-bullet-active {
    background-color: #fff;
}

</style>