<template>
    <div class="extraNews"> 
        <h3 class="title">НЭМЭЛТ МЭДЭЭЛЛҮҮД</h3>
        <div class="extraNews_wrapper">
            <div class="newsBox">
                <div style="width: 38px;"><img src="../assets/img/icons/file.png" alt=""></div>
                <div class="title">ТЕКСТ МЭДЭЭЛЛҮҮД</div>
                <button>Дэлгэрэнгүй</button>
            </div>
            <div class="newsBox">
                <div style="width: 49px;"><img src="../assets/img/icons/volume.png" alt=""></div>
                <div  class="title">ДУУТ МЭДЭЭЛЛҮҮД</div>
                <button>Дэлгэрэнгүй</button>
            </div>
            <div class="newsBox">
                <div style="width: 43px;"><img src="../assets/img/icons/video.png" alt=""></div>
                <div  class="title">ДҮРСТ МЭДЭЭЛЛҮҮД</div>
                <button>Дэлгэрэнгүй</button>
            </div>
        </div>
 
    </div>
</template>
  
<script>
  export default {
    name: 'ExtraNews',
  };
</script>
  
<style scoped>

.title {
    color: var(--primary-color);
}

.extraNews {
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 52px auto 0;
}

.extraNews_wrapper {
    gap: 40px;
    display: flex;
    justify-content: center;
}

.extraNews .newsBox {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    width: 387px;
    height: 243px;
    border-radius: 15px;
    padding: 31px 85px 56px;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.newsBox .title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
}
.newsBox button {
    width: 216px;
    height: 40px;
    background-color: var(--success-color);
    color: #fff;
    padding: 3px 53px 10px;
    border: none;
    border-radius: 25px;
    margin-top: 16px;
    font-size: 20px;
}

</style>
  